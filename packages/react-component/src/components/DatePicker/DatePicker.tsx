import { DateTime } from 'luxon'
import { useCallback, useEffect, useState } from 'react'
import { Typography } from 'src/components'

import { Calendar } from './Calendar'
import { DateInput } from './DateInput'

interface CalendarProps {
  dateTime?: DateTime
  handleDatePick: (dateTime: string | undefined) => void
}

export const DatePicker = ({ dateTime, handleDatePick }: CalendarProps) => {
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
    handleDatePick(date?.toFormat('yyyy-MM-dd'))
  }, [date, handleDatePick])

  return (
    <div className="flex flex-col items-start">
      <Typography type="subTitle" variant="subTitle2" className="mb-[2px]">
        Date
      </Typography>
      <DateInput
        handleSelectDay={handleSelectDay}
        toggleIsOpen={toggleIsOpen}
        date={date}
        clearDate={clearDate}
      />
      {isOpen && <Calendar date={date} handleSelectDay={handleSelectDay} />}
    </div>
  )
}
