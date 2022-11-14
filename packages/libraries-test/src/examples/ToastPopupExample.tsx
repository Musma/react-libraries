import { useState } from 'react'

import { Button, ToastPopup } from 'src/components'

export const ToastPopupExample = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button variant="danger" onClick={() => setIsOpen(true)}>
        Open Toast Popup
      </Button>
      <ToastPopup
        height="50px"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        state="info"
        title="Information"
        mode="dark"
      />
    </div>
  )
}
