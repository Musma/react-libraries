import { useCallback, useEffect, useState } from 'react'

import { useTheme } from '@emotion/react'
import { DateTime } from 'luxon'

import { Calendar, DateInput, InputLabel } from 'src/components'
import { Box } from 'src/elements'
import { Size } from 'src/types'

/**
 * FIXME: @jinchuu
 * 리팩토링 해주세요. Input 3개 사용하지 않고 1개만 사용해서 ref 전달받을 수 있도록 수정 부탁드립니다.
 */

interface DatePickerProps {
  label?: string
  size?: Size
  dateTime?: DateTime
  onDateChange: (dateTime: DateTime | undefined) => void
}

export const DatePicker = ({ label, size = 'md', dateTime, onDateChange }: DatePickerProps) => {
  const theme = useTheme()

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
        minWidth: theme.inputSize.minWidth,
      }}
    >
      {/* 라벨 */}
      {label && <InputLabel size={size}>{label}</InputLabel>}

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
