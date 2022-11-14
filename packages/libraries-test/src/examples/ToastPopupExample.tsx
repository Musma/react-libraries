import { useState } from 'react'

import { Button, Modal } from 'src/components'
import { useModalManager } from 'src/components/Modal/useModalManager'

export const ToastPopupExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const popupManager = useModalManager()
  return (
    <div>
      <Button variant="danger" onClick={() => setIsOpen(true)}>
        Open Toast Popup
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
        modalManager={popupManager}
        closeOnEscPress={true}
        closeOnOutsideClick={true}
        onClose={() => setIsOpen(false)}
      >
        <Button variant={'outlined'} onClick={() => setIsOpen2(true)}>
          Open second modal
        </Button>
        contents1
      </Modal>
    </div>
  )
}
