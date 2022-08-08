import { DateTime } from 'luxon'
import { useCallback, useMemo, useState } from 'react'
import {
  Button,
  Checkbox,
  Modal,
  RadioButton,
  Table,
  TextInput,
  TimePicker,
  usePagination,
} from './components'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [date, setDate] = useState(DateTime.now())
  return (
    <div>
      <Button label="open" onClick={() => setIsOpen(true)} />
      <div className="flex justify-center">
        <TextInput label={'tt'} type="search" />
        <TextInput label={'tt'} type="search" size="md" />
        <TextInput label={'tt'} type="search" size="sm" />

        <TextInput label="zz" type="password" />
        <TextInput label="zz" type="password" size="md" />
        <TextInput label="zz" type="password" size="sm" />
        <Checkbox />
      </div>
      <TimePicker label={'time'} date={date} onDateChange={(date) => setDate(date)} />
      <TimePicker label={'time'} date={date} onDateChange={(date) => setDate(date)} size="md" />
      <TimePicker label={'time'} date={date} onDateChange={(date) => setDate(date)} size="sm" />
    </div>
  )
}

export default App
