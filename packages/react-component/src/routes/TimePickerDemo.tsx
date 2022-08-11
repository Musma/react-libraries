import { DateTime } from 'luxon'
import { useState } from 'react'
import { TimePicker } from 'src/components'

export const TimePickerDemo = () => {
  const [date, setDate] = useState(DateTime.now())
  return (
    <div className="flex gap-4">
      <TimePicker label={'Time'} date={date} onDateChange={(d) => setDate(d)} />
      <TimePicker label={'Time'} date={date} onDateChange={(d) => setDate(d)} />
      <TimePicker label={'Time'} date={date} onDateChange={(d) => setDate(d)} />
    </div>
  )
}
