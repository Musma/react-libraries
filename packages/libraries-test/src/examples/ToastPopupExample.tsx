import { useMemo, useState } from 'react'

import { Button, IToastPopupList, ToastContainer } from 'src/components'

export const ToastPopupExample = () => {
  const [showToastPopup, setShowToastPopup] = useState<IToastPopupList>()

  const toastList: IToastPopupList[] = useMemo(
    () => [
      {
        id: 1,
        state: 'info',
        title: 'Information',
        mode: 'light',
      },
      {
        id: 2,
        state: 'error',
        title: 'Error',
        description: '삐빅 에러입니다',
        mode: 'light',
      },
      {
        id: 3,
        state: 'success',
        title: 'Success',
        description: '성공쓰! 축하축하!',
        mode: 'light',
      },
      {
        id: 4,
        state: 'warning',
        title: 'Warning',
        description: '위험해!!!!!!!!!',
        mode: 'light',
      },
    ],
    [],
  )

  return (
    <div>
      {toastList.map((item) => {
        return (
          <Button
            key={item.state}
            onClick={() => setShowToastPopup(item)}
            css={{
              background: item.state === 'error' ? 'red' : undefined,
            }}
          >
            {item.title}
          </Button>
        )
      })}
      <ToastContainer height="50px" newToastPopup={showToastPopup} />
    </div>
  )
}
