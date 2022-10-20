export function convertHexToRGB(hexColor: string, opacity = 1) {
  const color = hexColor.substring(1).match(/.{1,2}/g)
  if (color) {
    return `rgba(${parseInt(color[0], 16)},${parseInt(color[1], 16)},${parseInt(
      color[2],
      16,
    )},${opacity})`
  }

  return hexColor
}
