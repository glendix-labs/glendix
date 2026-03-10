// 위젯 프로덕션 빌드 (.mpk 생성)

import glendix/cmd

pub fn main() {
  cmd.run_tool_with_bridge("build:web")
}
