// DOM 요소 조작 유틸리티

import gleam/dynamic.{type Dynamic}
import gleam/option.{type Option}

/// 요소에 포커스 설정
@external(javascript, "./dom_ffi.mjs", "dom_focus")
pub fn focus(element: Dynamic) -> Nil

/// 요소에서 포커스 해제
@external(javascript, "./dom_ffi.mjs", "dom_blur")
pub fn blur(element: Dynamic) -> Nil

/// 요소 클릭 이벤트 트리거
@external(javascript, "./dom_ffi.mjs", "dom_click")
pub fn click(element: Dynamic) -> Nil

/// 요소를 뷰포트에 스크롤
@external(javascript, "./dom_ffi.mjs", "dom_scroll_into_view")
pub fn scroll_into_view(element: Dynamic) -> Nil

/// 요소의 위치/크기 정보 (DOMRect 객체)
@external(javascript, "./dom_ffi.mjs", "dom_get_bounding_client_rect")
pub fn get_bounding_client_rect(element: Dynamic) -> Dynamic

/// CSS 선택자로 하위 요소 검색
@external(javascript, "./dom_ffi.mjs", "dom_query_selector")
pub fn query_selector(element: Dynamic, selector: String) -> Option(Dynamic)
