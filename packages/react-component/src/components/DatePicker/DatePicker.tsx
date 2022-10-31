import { useCallback, useEffect, useState } from 'react'

import { DateTime } from 'luxon'

import { Box, Calendar, DateInput, Typography } from 'src/components'
import { Size } from 'src/types'

interface DatePickerProps {
  label?: string
  size?: Size
  dateTime?: DateTime
  handleDatePick: (dateTime: DateTime | undefined) => void
}

export const DatePicker = ({ label, size = 'md', dateTime, handleDatePick }: DatePickerProps) => {
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
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        minWidth: 64,
      }}
    >
      {/* 라벨 */}
      {label && <Typography type={size === 'lg' ? 'subTitle2' : 'subTitle3'}>{label}</Typography>}

      {/* Input */}
      <DateInput
        size={size}
        handleSelectDay={handleSelectDay}
        toggleIsOpen={toggleIsOpen}
        date={date}
        clearDate={clearDate}
      />

      {/* 달력 */}
      {isOpen && <Calendar size={size} date={date} handleSelectDay={handleSelectDay} />}
    </Box>
  )
}
