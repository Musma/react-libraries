/**
 * @description
 * 숫자를 전달받아 null 또는 undefined 일 경우 0을 리턴해줍니다.
 * @param num 변환할 숫자값
 */
export function convertEmptyNumber(num?: number | null) {
  return num ?? 0
}
