import { useState } from 'react'

import { Button, ToastPopup } from 'src/components'

export const ToastPopupExample = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)

  return (
    <div>
      <div css={{ margin: '5px 0' }}>
        <Button variant="contained" onClick={() => setIsOpen1(true)}>
          Open Toast Popup 1
        </Button>
        <ToastPopup
          height="50px"
          isOpen={isOpen1}
          setIsOpen={setIsOpen1}
          state="info"
          title="Information"
          description="안녕하십니까. 정보입니다."
          mode="dark"
        />
      </div>
      <div>
        <Button variant="danger" onClick={() => setIsOpen2(true)}>
          Open Toast Popup 2
        </Button>
        <ToastPopup
          height="50px"
          isOpen={isOpen2}
          setIsOpen={setIsOpen2}
          state="info"
          title="Information"
          description="안녕하십니까. 정보입니다."
          mode="dark"
        />
      </div>
      <div css={{ margin: '5px 0' }}>
        <Button variant="outlined" onClick={() => setIsOpen3(true)}>
          Open Toast Popup 3
        </Button>
        <ToastPopup
          height="50px"
          isOpen={isOpen3}
          setIsOpen={setIsOpen3}
          state="info"
          title="Information"
          description="안녕하십니까. 정보입니다."
          mode="dark"
        />
      </div>
    </div>
  )
}
