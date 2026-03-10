// 셸 명령어 실행 + 파일 존재 확인 + 브릿지 자동 생성 FFI 어댑터
import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync, unlinkSync } from "node:fs";

export function exec(command) {
  execSync(command, { stdio: "inherit", shell: true });
}

export function file_exists(path) {
  return existsSync(path);
}

// 브릿지 JS 파일을 자동 생성하고 명령 실행 후 삭제
export function run_with_bridge(command) {
  const widgetName = JSON.parse(readFileSync("package.json", "utf-8")).widgetName;
  const gleamProject = readFileSync("gleam.toml", "utf-8").match(/^name\s*=\s*"([^"]+)"/m)[1];

  const widgetBridge = `src/${widgetName}.js`;
  const editorBridge = `src/${widgetName}.editorConfig.js`;
  const previewBridge = `src/${widgetName}.editorPreview.js`;

  // 위젯 브릿지 생성
  writeFileSync(
    widgetBridge,
    `// 자동 생성 브릿지 — 수동 편집 금지\n` +
    `import { widget } from "../build/dev/javascript/${gleamProject}/${gleamProject.replace(/-/g, "_")}.mjs";\n` +
    `import "./ui/${widgetName}.css";\n\n` +
    `export const ${widgetName} = widget;\n`,
  );

  // editorConfig 브릿지 (src/widget/editor_config.gleam 존재 시만)
  const hasEditor = existsSync("src/editor_config.gleam");
  if (hasEditor) {
    writeFileSync(
      editorBridge,
      `// 자동 생성 브릿지 — 수동 편집 금지\n` +
      `import { get_properties } from "../build/dev/javascript/${gleamProject}/editor_config.mjs";\n\n` +
      `export const getProperties = get_properties;\n`,
    );
  }

  // editorPreview 브릿지 (src/editor_preview.gleam 존재 시만)
  const hasPreview = existsSync("src/editor_preview.gleam");
  if (hasPreview) {
    writeFileSync(
      previewBridge,
      `// 자동 생성 브릿지 — 수동 편집 금지\n` +
      `import { preview } from "../build/dev/javascript/${gleamProject}/editor_preview.mjs";\n\n` +
      `export { preview };\n` +
      `export function getPreviewCss() {\n` +
      `  return require("./ui/${widgetName}.css");\n` +
      `}\n`,
    );
  }

  // SIGINT 핸들러 + try/finally로 정리 보장
  const cleanup = () => {
    try { unlinkSync(widgetBridge); } catch {}
    if (hasEditor) try { unlinkSync(editorBridge); } catch {}
    if (hasPreview) try { unlinkSync(previewBridge); } catch {}
  };
  process.on("SIGINT", () => { cleanup(); process.exit(130); });

  try {
    execSync(command, { stdio: "inherit", shell: true });
  } finally {
    cleanup();
  }
}
