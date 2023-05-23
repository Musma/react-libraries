/**
 *
 * @param value 값
 * @param target 비교할 값들 배열임
 * @description tar
 */
export const containedValue = <T>(value: T, target: T[]) => {
  return target.some((v) => v === value)
}
