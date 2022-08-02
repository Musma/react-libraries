import { TimePicker } from '@musma/react-component'
import { DateTime } from 'luxon'
import { useState } from 'react'

const ddd = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [date, setDate] = useState(DateTime.local())
  const ccc = (dateTime: DateTime) => {
    setDate(dateTime)
  }
  return <TimePicker date={date} onDateChange={ccc} />
}

export default ddd
