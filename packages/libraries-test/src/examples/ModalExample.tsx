import { useState } from 'react'

import { Button, Modal, useModalManager } from '@musma/react-component'
import { OutlineAddBoxIcon } from '@musma/react-icons'

export const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const modalManager = useModalManager()

  return (
    <div>
      <Button variant={'outlined'} onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      {isOpen && (
        <Modal
          title={'첫 번째 모달 입니다'}
          show={isOpen}
          modalManager={modalManager}
          id="111"
          onClose={() => setIsOpen(false)}
        >
          <OutlineAddBoxIcon css={{ color: '#dd9c4f' }} />

          {isOpen2 && (
            <Modal
              title={'두 번째 모달 입니다'}
              show={isOpen2}
              id="222"
              modalManager={modalManager}
              onClose={() => setIsOpen2(false)}
            >
              contents2
            </Modal>
          )}

          <Button variant={'outlined'} onClick={() => setIsOpen2(true)}>
            Open second modal
          </Button>
        </Modal>
      )}
    </div>
  )
}
