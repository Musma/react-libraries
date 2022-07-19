export function generateRandomValues(): string {
  const array = new Uint32Array(1)
  crypto.getRandomValues(array)
  return array.toString()
}
