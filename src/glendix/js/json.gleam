// JSON 직렬화/역직렬화

import gleam/dynamic.{type Dynamic}

/// JS 값을 JSON 문자열로 변환
@external(javascript, "./json_ffi.mjs", "json_stringify")
pub fn stringify(value: Dynamic) -> String

/// JSON 문자열을 파싱 (실패 시 Error(에러 메시지))
@external(javascript, "./json_ffi.mjs", "json_parse")
pub fn parse(json: String) -> Result(Dynamic, String)
