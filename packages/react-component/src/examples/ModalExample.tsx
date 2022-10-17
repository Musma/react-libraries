import { useState } from 'react'

import { Button, Modal } from 'src/components'
import { useModalManager } from 'src/components/Modal/useModalManager'

export const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const modalManager = useModalManager()
  return (
    <div>
      <Button variant={'outlined'} onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal
        title={'첫 번째 모달 입니다'}
        isOpen={isOpen}
        buttonOption={{
          label: 'button1',
          onClick: () => alert('button1 클릭'),
          secondLabel: 'button2',
          onSecondClick() {
            alert('button2 클릭')
          },
        }}
        modalManager={modalManager}
        closeOnEscPress={true}
        closeOnOutsideClick={true}
        onClose={() => setIsOpen(false)}
      >
        <Button variant={'outlined'} onClick={() => setIsOpen2(true)}>
          Open second modal
        </Button>
        contents1
      </Modal>
      <Modal
        title={'두 번째 모달 입니다'}
        isOpen={isOpen2}
        buttonOption={{
          label: 'button1',
          onClick: () => console.log('button1'),
          secondLabel: 'button2',
          onSecondClick() {
            console.log('button2')
          },
        }}
        modalManager={modalManager}
        closeOnEscPress={true}
        closeOnOutsideClick={true}
        onClose={() => setIsOpen2(false)}
      >
        contents2
      </Modal>
    </div>
  )
}
