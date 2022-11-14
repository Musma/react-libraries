import { useCallback, useState } from 'react'

import { Box } from 'src/elements'

import { Button, Modal, ModalActions, ModalButton } from './components'
import { ModalContent } from './components/Modal/components/ModalContent'

const OPTIONS = [
  { label: '31', value: 31 },
  { label: '32', value: 32 },
]

export const Component = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = useCallback(() => {
    setModal(!modal)
  }, [modal])

  return (
    <Box>
      <Button
        onClick={() => {
          toggleModal()
        }}
      >
        dkdkdkdk
      </Button>
      <Modal
        size={'lg'}
        show={modal}
        title="123123"
        onClose={() => {
          toggleModal()
        }}
      >
        <ModalContent>
          12-03912-039 129-031203 129308129038213821 120938120938 1290381209381290 12938120938
          129038120938 12390812039
        </ModalContent>

        <ModalActions>
          <ModalButton>ㅁㅁㅁ</ModalButton>
        </ModalActions>
      </Modal>
    </Box>
  )
}
