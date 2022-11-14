import { useCallback, useState } from 'react'

import { Box } from 'src/elements'

import { Button, Modal } from './components'

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
        show={modal}
        title="123123"
        onClose={() => {
          toggleModal()
        }}
      >
        aspodkaopskd
      </Modal>
    </Box>
  )
}
