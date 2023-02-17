/**
 * 정규표현식을 모아놨습니다.
 */
export const RegExps = {
  ONLY_DIGIT: /^[0-9]*$/, // 숫자만
  ONLY_ENGLISH: /^[a-zA-Z ]*$/, // 영문과 공백
  ONLY_ENGLISH_AND_DIGIT: /^[a-zA-Z0-9 ]*$/, // 영문과 공백 + 숫자
  ONLY_DIGIT_AND_DOT: /^[0-9|.]*$/, // 숫자와 Dot
  EMAIL: /^[a-z0-9@|.]*$/, // 이메일
  QRCODE: /^E[0-9][0-9][0-9][0-9][0-9]$/, // QR Code
} as const
