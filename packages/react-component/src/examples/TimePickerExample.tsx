import { useState } from 'react'

import { DateTime } from 'luxon'

import { TimePicker } from 'src/components/TimePicker'

export const TimePickerExample = () => {
  const [date, setDate] = useState(DateTime.now())
  return (
    <TimePicker
      label={'Sample TimePicker'}
      date={date}
      onDateChange={(date) => setDate(date)}
      size="lg"
    />
  )
}
