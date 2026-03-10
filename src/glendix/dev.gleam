// 개발 서버 시작 (HMR, port 3000)

import glendix/cmd

pub fn main() {
  cmd.run_tool_with_bridge("start:web")
}
