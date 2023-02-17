/**
 * 정규표현식을 모아놨습니다.
 */
export const RegExps = {
  ONLY_DIGIT: /^[0-9]*$/, //~> 숫자만
  ONLY_DIGIT_AND_DASH: /^[0-9|-]*$/, //~> 숫자와 Dash
  ONLY_DIGIT_AND_DOT: /^[0-9|.]*$/, //~> 숫자와 Dot
  ONLY_EMAIL: /^[a-z0-9@|.]*$/, //~> 이메일
  ONLY_ENGLISH: /^[a-zA-Z ]*$/, //~> 영문과 공백
  ONLY_ENGLISH_AND_DIGIT: /^[a-zA-Z0-9 ]*$/, //~> 영문과 공백 + 숫자
  QRCODE: /^E[0-9][0-9][0-9][0-9][0-9]$/, //~> QR Code
} as const
