import { useState } from 'react'

import { TimePicker } from '@musma/react-component'
import { DateTime } from 'luxon'

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
