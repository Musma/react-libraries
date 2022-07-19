/**
 *
 * @param value 값
 * @param target 비교할 값들 배열임
 * @description tar
 */
export function containedValue(value: string, target: string[]) {
  return target.some((v) => v === value)
}
