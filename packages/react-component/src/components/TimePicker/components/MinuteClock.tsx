import { DateTime } from 'luxon'
import { Fragment } from 'react'

import { ClockNumber } from './ClockNumber'
import { ClockPositions } from './ClockPositions'

interface MinuteClockProps {
  date: DateTime
}

export const MinuteClock = ({ date }: MinuteClockProps) => {
  const currentMinute = date.minute

  const isSelected = (index: number) => {
    return currentMinute === index * 5
  }

  const convertHourLabel = (index: number) => {
    return DateTime.fromObject({ minute: index * 5 }).toFormat('mm')
  }

  return (
    <Fragment>
      {ClockPositions.map((position, index) => (
        <ClockNumber
          key={index}
          label={convertHourLabel(index)}
          position={position}
          isSelected={isSelected(index)}
        />
      ))}
    </Fragment>
  )
}
