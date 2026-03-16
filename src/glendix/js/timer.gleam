// 타이머 API — setTimeout / setInterval 래퍼

/// 타이머 식별자 (숫자 조작 방지용 opaque type)
pub type TimerId

/// 지연 실행 타이머 설정
@external(javascript, "./timer_ffi.mjs", "set_timeout")
pub fn set_timeout(callback: fn() -> Nil, ms: Int) -> TimerId

/// setTimeout 취소
@external(javascript, "./timer_ffi.mjs", "clear_timeout")
pub fn clear_timeout(id: TimerId) -> Nil

/// 반복 실행 타이머 설정
@external(javascript, "./timer_ffi.mjs", "set_interval")
pub fn set_interval(callback: fn() -> Nil, ms: Int) -> TimerId

/// setInterval 취소
@external(javascript, "./timer_ffi.mjs", "clear_interval")
pub fn clear_interval(id: TimerId) -> Nil
