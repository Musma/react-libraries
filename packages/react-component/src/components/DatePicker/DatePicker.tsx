import { DateTime } from 'luxon'
import { useCallback, useEffect, useState } from 'react'
import { Typography } from 'src/components'
import { Size } from 'src/types'

import { Calendar } from './Calendar'
import { DateInput } from './DateInput'

interface CalendarProps {
  label?: string
  size?: Size
  dateTime?: DateTime
  handleDatePick: (dateTime: DateTime | undefined) => void
}

export const DatePicker = ({
  label = '',
  size = 'lg',
  dateTime,
  handleDatePick,
}: CalendarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [date, setDate] = useState<DateTime | undefined>(dateTime)
  const handleSelectDay = useCallback((y: number, m: number, d: number) => {
    setDate(DateTime.fromObject({ year: y, month: m, day: d }))
  }, [])
  const clearDate = useCallback(() => {
    setDate(undefined)
  }, [])
  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  useEffect(() => {
    handleDatePick(date)
  }, [date, handleDatePick])

  return (
    <div className="flex flex-col items-start">
      <Typography
        type="subTitle"
        variant={size === 'lg' ? 'subTitle2' : 'subTitle3'}
        className="mb-[2px]"
      >
        {label}
      </Typography>
      <DateInput
        size={size}
        handleSelectDay={handleSelectDay}
        toggleIsOpen={toggleIsOpen}
        date={date}
        clearDate={clearDate}
      />
      {isOpen && <Calendar size={size} date={date} handleSelectDay={handleSelectDay} />}
    </div>
  )
}
