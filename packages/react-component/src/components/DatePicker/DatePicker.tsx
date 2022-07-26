import { DateTime } from 'luxon'
import { useCallback, useEffect, useState } from 'react'

import { Calendar } from './Calendar'
import { DateInput } from './DateInput'

import { SubTitle } from 'src/components'

interface CalendarProps {
  handleDatePick: (dateTime: string | undefined) => void
}

export const DatePicker = ({ handleDatePick }: CalendarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [date, setDate] = useState<DateTime | undefined>(undefined)
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
      <SubTitle className="mb-[2px]" element={2}>
        Date
      </SubTitle>
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
