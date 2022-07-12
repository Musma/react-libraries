import { DateTime } from 'luxon'

import { Meridiem } from '../type/TimeType'

const clockCenter = {
  x: 144 / 2,
  y: 144 / 2,
}

const baseClockPoint = {
  x: clockCenter.x,
  y: 0,
}

const cx = baseClockPoint.x - clockCenter.x
const cy = baseClockPoint.y - clockCenter.y

const rad2deg = (rad: number) => rad * 57.29577951308232

const getAngleValue = (step: number, offsetX: number, offsetY: number) => {
  const x = offsetX - clockCenter.x
  const y = offsetY - clockCenter.y

  const atan = Math.atan2(cx, cy) - Math.atan2(x, y)

  let deg = rad2deg(atan)
  deg = Math.round(deg / step) * step
  deg %= 360

  const value = Math.floor(deg / step) || 0
  const delta = x ** 2 + y ** 2
  const distance = Math.sqrt(delta)

  return { value, distance }
}

export const getMeridiem = (date: DateTime): Meridiem => {
  return date.hour >= 12 ? 'pm' : 'am'
}

export const getMinutes = (offsetX: number, offsetY: number, step = 1) => {
  const angleStep = step * 6
  let { value } = getAngleValue(angleStep, offsetX, offsetY)
  value = (value * step) % 60

  return value
}

export const getHours = (offsetX: number, offsetY: number) => {
  const { value } = getAngleValue(30, offsetX, offsetY)
  return (value || 12) % 12
}
