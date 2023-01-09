import { useState } from 'react'

import { Button, Modal } from '@musma/react-component'
import { OutlineAddBoxIcon } from '@musma/react-icons'

export const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  return (
    <div>
      <Button variant={'outlined'} onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      {isOpen && (
        <Modal
          title={'첫 번째 모달 입니다'}
          show={isOpen}
          id="111"
          onClose={() => setIsOpen(false)}
        >
          <OutlineAddBoxIcon css={{ color: '#dd9c4f' }} />

          {isOpen2 && (
            <Modal
              title={'두 번째 모달 입니다'}
              show={isOpen2}
              id="222"
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
