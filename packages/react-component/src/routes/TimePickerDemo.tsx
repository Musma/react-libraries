import { DateTime } from 'luxon'
import { useState } from 'react'
import { TimePicker } from 'src/components'

export const TimePickerDemo = () => {
  const [date, setDate] = useState(DateTime.now())
  return <TimePicker label={'Time'} date={date} onDateChange={(d) => setDate(d)} />
}
