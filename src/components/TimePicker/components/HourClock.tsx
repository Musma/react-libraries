import { DateTime } from 'luxon'
import { Fragment } from 'react'

import { getMeridiem, ClockNumber, ClockPositions } from 'src/components'

interface HourClockProps {
  date: DateTime
}

export const HourClock = ({ date }: HourClockProps) => {
  const currentHours = date.hour

  const isSelected = (index: number) => {
    const ampm = getMeridiem(date) === 'pm' ? 12 : 0
    const hour = index + ampm
    return currentHours === hour
  }

  const convertHourLabel = (index: number) => {
    return DateTime.fromObject({ hour: index }).toFormat('h')
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
