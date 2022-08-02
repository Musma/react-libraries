import { useState } from 'react'
import { useModalManager } from 'src/components/Modal/useModalManager'

import { Button, Modal, Select, Tag, useTags } from './components'

const App = () => {
  const swTeam = useTags(['dyson', 'bob', 'kuhn'])
  const [selected, setSelected] = useState('')
  const manager = useModalManager()
  return (
    <div className="h-full w-full">
      <div className="ml-20 mt-10">
        <header className="sticky top-0 z-10 h-14 border-b bg-white dark:bg-slate-600">
          <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-10">
            header 입니다
          </div>
        </header>
        selected: {selected}
        <div>
          <Select
            size="lg"
            label={'라벨'}
            value={selected}
            options={['jason', 'jelly', 'summer', 'justin', 'hi', 'hello', '안녕'].map((item) => ({
              label: item,
              value: item,
            }))}
            onChange={(value) => setSelected(value)}
          />
          <Select
            size="md"
            label={'라벨'}
            value={selected}
            options={['jason', 'jelly', 'summer', 'justin', 'hi', 'hello', '안녕'].map((item) => ({
              label: item,
              value: item,
            }))}
            onChange={(value) => setSelected(value)}
          />
          <Select
            size="sm"
            label={'라벨'}
            value={selected}
            options={['jason', 'jelly', 'summer', 'justin', 'hi', 'hello', '안녕'].map((item) => ({
              label: item,
              value: item,
            }))}
            onChange={(value) => setSelected(value)}
          />
        </div>
      </div>
    </div>
  )
}

export default App
