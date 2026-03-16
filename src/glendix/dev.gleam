// 개발 서버 시작 (HMR + .gleam 파일 변경 감지)

import glendix/cmd

pub fn main() {
  cmd.run_tool_dev()
}
