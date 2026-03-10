// Mendix Big.js FFI — 고정밀 십진수 연산
// mendix_ffi.mjs에서 분리: preview 번들에 포함되지 않도록 격리
import Big from "big.js";

export function big_from_string(s) {
  return new Big(s);
}

export function big_from_int(n) {
  return new Big(n);
}

export function big_from_float(f) {
  return new Big(f);
}

export function big_to_string(b) {
  return b.toString();
}

export function big_to_float(b) {
  return b.toNumber();
}

export function big_to_int(b) {
  return Math.trunc(b.toNumber());
}

export function big_to_fixed(b, dp) {
  return b.toFixed(dp);
}

export function big_add(a, b) {
  return a.plus(b);
}

export function big_sub(a, b) {
  return a.minus(b);
}

export function big_mul(a, b) {
  return a.times(b);
}

export function big_div(a, b) {
  return a.div(b);
}

export function big_abs(b) {
  return b.abs();
}

export function big_negate(b) {
  return b.times(-1);
}

export function big_cmp(a, b) {
  return a.cmp(b);
}

export function big_eq(a, b) {
  return a.eq(b);
}
