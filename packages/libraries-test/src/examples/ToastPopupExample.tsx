import { useCallback, useMemo, useState } from 'react'

import { Button, IToastPopupProps, Toast } from 'src/components'

export interface IToastPopupListProps extends IToastPopupProps {
  id: number
}

export const ToastPopupExample = () => {
  const [showList, setShowList] = useState<IToastPopupListProps[]>([])
  const [checkValue, setCheckValue] = useState(true)
  const [autoDeleteTime, setAutoDeleteTime] = useState(1000 * 3.5)

  const showToast = (item: IToastPopupProps) => {
    setShowList((current) => {
      return [
        {
          id: Math.floor(Math.random() * 100 + 1),
          ...item,
        },
        ...current,
      ]
    })
  }

  const deleteToast = useCallback(
    (id: number) => {
      const index = showList.findIndex((e) => e.id === id)
      if (index >= 0) {
        showList.splice(index, 1)
        setShowList([...showList])
      }
    },
    [showList],
  )

  const toastList: IToastPopupProps[] = useMemo(
    () => [
      {
        state: 'info',
        title: 'Information',
        description: '안녕하십니까. 정보입니다.',
        mode: 'light',
      },
      {
        state: 'error',
        title: 'Error',
        description: '삐빅 에러입니다',
        mode: 'dark',
      },
      {
        state: 'success',
        title: 'Success',
        description: '성공쓰! 축하축하!',
        mode: 'light',
      },
      {
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
          <Button key={item.state} onClick={() => showToast(item)}>
            {item.title}
          </Button>
        )
      })}
      <Toast
        toastList={showList}
        height="50px"
        onCloseClick={deleteToast}
        autoDelete={checkValue}
        autoDeleteTime={autoDeleteTime}
      />
    </div>
  )
}
