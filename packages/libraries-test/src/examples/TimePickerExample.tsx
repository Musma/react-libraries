import { useState } from 'react'

import { Box, TimePicker } from '@musma/react-component'
import { DateTime } from 'luxon'

export const TimePickerExample = () => {
  const [date, setDate] = useState(DateTime.now())
  return (
    <Box>
      <TimePicker
        label={'Sample TimePicker'}
        date={date}
        onDateChange={(date) => setDate(date)}
        size="lg"
      />

      <TimePicker
        label={'Sample TimePicker'}
        date={date}
        onDateChange={(date) => setDate(date)}
        size="md"
      />

      <TimePicker
        label={'Sample TimePicker'}
        date={date}
        onDateChange={(date) => setDate(date)}
        size="sm"
      />
    </Box>
  )
}
