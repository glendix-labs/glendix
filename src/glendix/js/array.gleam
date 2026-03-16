// JS 배열 ↔ Gleam List 변환 유틸리티

import gleam/dynamic.{type Dynamic}

/// Gleam List를 JS 배열로 변환
@external(javascript, "../react_ffi.mjs", "list_to_array")
pub fn from_list(list: List(a)) -> Dynamic

/// JS 배열을 Gleam List로 변환
@external(javascript, "../react_ffi.mjs", "array_to_list")
pub fn to_list(array: Dynamic) -> List(a)
