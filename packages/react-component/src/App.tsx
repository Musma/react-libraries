import { DateTime } from 'luxon'
import { useState } from 'react'
import { useModalManager } from 'src/components/Modal/useModalManager'

import { Button, Modal, Select, Tag, TextInput, TimePicker, useTags } from './components'

const App = () => {
  const today = DateTime.now()
  const [time, setTime] = useState(today)

  return (
    <div className="h-full w-full">
      <div className="ml-20 mt-10">
        <header className="sticky top-0 z-10 h-14 border-b bg-white dark:bg-slate-600">
          <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-10">
            header 입니다
          </div>
        </header>
        <TimePicker size="sm" date={time} onDateChange={(time) => setTime(time)} />
        <TimePicker size="md" date={time} onDateChange={(time) => setTime(time)} />
        <TimePicker size="lg" date={time} onDateChange={(time) => setTime(time)} />
        <div></div>
      </div>
    </div>
  )
}

export default App
