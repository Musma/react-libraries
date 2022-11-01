import { useCallback, useEffect, useState } from 'react'

import { DateTime } from 'luxon'

import { Calendar, DateInput, InputLabel } from 'src/components'
import { Box } from 'src/elements'
import { Size } from 'src/types'

interface DatePickerProps {
  label?: string
  size?: Size
  dateTime?: DateTime
  onDateChange: (dateTime: DateTime | undefined) => void
}

export const DatePicker = ({ label, size = 'md', dateTime, onDateChange }: DatePickerProps) => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<DateTime | undefined>(dateTime)

  const handleSelectDay = useCallback((y: number, m: number, d: number) => {
    setDate(DateTime.fromObject({ year: y, month: m, day: d }))
  }, [])

  const clearDate = useCallback(() => {
    setDate(undefined)
  }, [])

  const toggleIsOpen = useCallback(() => {
    setOpen(!open)
  }, [open])

  useEffect(() => {
    onDateChange(date)
  }, [date, onDateChange])

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100%',
        minWidth: 64,
      }}
    >
      {/* 라벨 */}
      <InputLabel size={size}>{label}</InputLabel>

      {/* Input */}
      <DateInput
        size={size}
        handleSelectDay={handleSelectDay}
        toggleIsOpen={toggleIsOpen}
        date={date}
        clearDate={clearDate}
      />

      {/* 달력 */}
      {open && <Calendar size={size} date={date} handleSelectDay={handleSelectDay} />}
    </Box>
  )
}
