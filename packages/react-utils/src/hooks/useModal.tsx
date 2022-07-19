import { useState } from 'react'

const useModal = () => {
  const [visible, setVisible] = useState(false)

  const onClose = () => setVisible(false)
  const onOpen = () => setVisible(true)

  return { visible, onClose, onOpen }
}

export default useModal
