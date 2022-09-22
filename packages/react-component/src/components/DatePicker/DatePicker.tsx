import { useCallback, useEffect, useState } from 'react'

import { css } from '@emotion/css'
import { DateTime } from 'luxon'

import { Calendar, DateInput, Typography } from 'src/components'
import { Size } from 'src/styles'

interface DatePickerProps {
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
}: DatePickerProps) => {
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
    <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' })}>
      <Typography type={size === 'lg' ? 'subTitle2' : 'subTitle3'} css={{ marginBottom: '2px' }}>
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
