import { isNumber } from './LodashUtil'

/**
 * @description
 * 숫자를 전달받아 null 또는 undefined 일 경우 0을 리턴해줍니다.
 * @param num 변환할 숫자값
 */
export function convertEmptyNumber(num?: number | null) {
  return num ?? 0
}

/**
 * 숫자를 문자열로 변환하고 콤마를 찍어줍니다.
 * 그리고 이상한 숫자 데이터인 4294967295라는 값이 오는 경우가 생겼을 때, '-'를 표시해줍니다.
 *
 * @returns string ("0", "-", "1,000")
 */
export const formatNumberWithCommas = (_number?: number | null) => {
  const number = isNumber(_number) ? _number : '0'

  if (+number > 4200000000) {
    return '-'
  }

  return number.toLocaleString()
}
