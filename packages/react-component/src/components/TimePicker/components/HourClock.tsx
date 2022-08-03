import { DateTime } from 'luxon'
import { Fragment } from 'react'
import { getMeridiem, ClockNumber, getClockPositions } from 'src/components'
import { Sizes } from 'src/types'

interface HourClockProps {
  size: Sizes
  date: DateTime
}

export const HourClock = ({ size, date }: HourClockProps) => {
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
