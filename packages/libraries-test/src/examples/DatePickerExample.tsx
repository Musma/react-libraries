import { useState } from 'react'

import { DatePicker } from '@musma/react-component'
import { DateTime } from 'luxon'

export const DatePickerExample = () => {
  const [date, setDate] = useState<DateTime | undefined>(DateTime.now())
  return (
    <DatePicker
      label="Sample DatePicker"
      dateTime={date}
      handleDatePick={(dateTime) => setDate(dateTime)}
      size="lg"
    />
  )
}
