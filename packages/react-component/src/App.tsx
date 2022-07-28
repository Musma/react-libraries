import { useState } from 'react'

import { Button, Modal, useModalManager } from './components'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const manager = useModalManager()
  return (
    <div className="h-full w-full">
      <div className="ml-20 mt-10">
        <header className="sticky top-0 z-10 h-14 border-b bg-white dark:bg-slate-600">
          <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-10">
            header 입니다
          </div>
        </header>
        <div>
          <Button label={'Open Modal'} onClick={() => setIsOpen(true)} />
          <Modal
            title={'Open Modal'}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            closeOnEscPress={true}
            modalManager={manager}
            buttonOption={{
              label: 'Button',
              onClick: () => undefined,
              secondLabel: 'Button',
              onSecondClick: () => undefined,
            }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center">
              ASOPDKASPODKASPODKASPODKASPODKASPOK
              <Button label={'Open Modal 2'} onClick={() => setIsOpen2(true)} />
            </div>
          </Modal>
          <Modal
            title={'Two'}
            isOpen={isOpen2}
            modalManager={manager}
            onClose={() => setIsOpen2(false)}
            closeOnEscPress={true}
            buttonOption={{
              label: 'Button',
              onClick: () => undefined,
              secondLabel: 'Button',
              onSecondClick: () => undefined,
            }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center">
              ASOPDKASPODKASPODKASPODKASPODKASPOK
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default App
