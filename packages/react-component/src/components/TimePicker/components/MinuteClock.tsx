import { DateTime } from 'luxon'
import { Fragment } from 'react'
import { Sizes } from 'src/types'

import { ClockNumber } from './ClockNumber'
import { ClockPositions, getClockPositions } from './ClockPositions'

interface MinuteClockProps {
  size: Sizes
  date: DateTime
}

export const MinuteClock = ({ size, date }: MinuteClockProps) => {
  const currentMinute = date.minute

  const isSelected = (index: number) => {
    return currentMinute === index * 5
  }

  const convertHourLabel = (index: number) => {
    return DateTime.fromObject({ minute: index * 5 }).toFormat('mm')
  }

  return (
    <Fragment>
      {getClockPositions(size).map((position, index) => (
        <ClockNumber
          size={size}
          key={index}
          label={convertHourLabel(index)}
          position={position}
          isSelected={isSelected(index)}
        />
      ))}
    </Fragment>
  )
}
