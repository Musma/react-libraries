import { DateTime } from 'luxon'
import { useState } from 'react'
import { DatePicker } from './components'

const App = () => {
  const [date, setDate] = useState<DateTime | undefined>(undefined)
  return (
    <div className="mt-[100px] flex justify-center gap-x-4 border">
      <DatePicker dateTime={date} handleDatePick={(date) => setDate(date)} size="lg" />
      <DatePicker dateTime={date} handleDatePick={(date) => setDate(date)} size="md" />
      <DatePicker dateTime={date} handleDatePick={(date) => setDate(date)} size="sm" />
    </div>
  )
}

export default App
