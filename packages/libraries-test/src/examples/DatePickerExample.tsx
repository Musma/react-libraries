import { useState } from 'react'

import { Box, DatePicker } from '@musma/react-component'
import { DateTime } from 'luxon'

export const DatePickerExample = () => {
  const [date, setDate] = useState<DateTime | undefined>(DateTime.now())
  return (
    <Box>
      <DatePicker
        label="Sample DatePicker"
        dateTime={date}
        handleDatePick={(dateTime) => setDate(dateTime)}
        size="lg"
      />

      <DatePicker
        label="Sample DatePicker"
        dateTime={date}
        handleDatePick={(dateTime) => setDate(dateTime)}
        size="md"
      />

      <DatePicker
        label="Sample DatePicker"
        dateTime={date}
        handleDatePick={(dateTime) => setDate(dateTime)}
        size="sm"
      />
    </Box>
  )
}
