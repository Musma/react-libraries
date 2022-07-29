import { useState } from 'react'
import { useModalManager } from 'src/components/Modal/useModalManager'

import { Button, Modal, Tag, useTags } from './components'

const App = () => {
  const swTeam = useTags(['dyson', 'bob', 'kuhn'])
  const [open, setOpen] = useState(false)
  const manager = useModalManager()
  return (
    <div className="h-full w-full">
      <div className="ml-20 mt-10">
        <header className="sticky top-0 z-10 h-14 border-b bg-white dark:bg-slate-600">
          <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-10">
            header 입니다
          </div>
        </header>
        <Button label="modal open" onClick={() => setOpen(true)} />
        <Modal
          buttonOption={{ label: 'label' }}
          title={'hh'}
          isOpen={open}
          modalManager={manager}
          onClose={() => setOpen(false)}
        >
          hh
        </Modal>
      </div>
    </div>
  )
}

export default App
