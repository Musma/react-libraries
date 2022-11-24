import { useMemo, useState } from 'react'

import { Button, ToastPopup } from 'src/components'

export const ToastPopupExample = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)

  const toast1 = useMemo(() => {
    return {
      id: 1,
      height: '50px',
      isOpen: isOpen1,
      setIsOpen: setIsOpen1,
      state: 'info',
      title: 'Information',
      description: '안녕하십니까. 정보입니다.',
      mode: 'dark',
    }
  }, [isOpen1])

  const toast2 = useMemo(() => {
    return {
      id: 2,
      height: '50px',
      isOpen: isOpen2,
      setIsOpen: setIsOpen2,
      state: 'error',
      title: 'Error',
      description: '삐빅 에러입니다',
      mode: 'light',
    }
  }, [isOpen2])

  const toast3 = useMemo(() => {
    return {
      id: 3,
      height: '50px',
      isOpen: isOpen3,
      setIsOpen: setIsOpen3,
      state: 'success',
      title: 'Success',
      description: '성공쓰',
      mode: 'light',
    }
  }, [isOpen3])

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
          state="error"
          title="Error"
          description="삐빅 에러입니다"
          mode="light"
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
          state="success"
          title="Success"
          description="성공쓰"
          mode="light"
        />
      </div>
    </div>
  )
}
