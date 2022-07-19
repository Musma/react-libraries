export function returnOnlyNumbers(value: string) {
  if (value === '' || /^[0-9\b]+$/.test(value)) {
    return value
  }
}
