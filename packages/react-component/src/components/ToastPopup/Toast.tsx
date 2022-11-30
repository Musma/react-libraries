import { useEffect, useState } from 'react'

import { IToastPopupListProps } from 'src/examples'

import { ToastPopup } from './ToastPopup'

interface IToastProps {
  height: string
  toastList: IToastPopupListProps[]
  onCloseClick(id: number): void
  autoDelete: boolean
  autoDeleteTime: number
}

export const Toast = ({
  height,
  toastList,
  onCloseClick,
  autoDelete,
  autoDeleteTime,
}: IToastProps) => {
  const [list, setList] = useState<IToastPopupListProps[]>(toastList)

  useEffect(() => {
    setList(toastList)
  }, [toastList])

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        onCloseClick(toastList[toastList.length - 1].id)
      }
    }, autoDeleteTime)
    return () => {
      clearInterval(interval)
    }
  }, [autoDelete, autoDeleteTime, list.length, onCloseClick, toastList])

  return (
    <div
      css={{
        position: 'fixed',
        top: `calc(${height} + 16px)`,
        right: 10,
        zIndex: 9999,
      }}
    >
      {list.map((item: IToastPopupListProps) => {
        return (
          <ToastPopup
            key={item.id}
            title={item.title}
            onCloseClick={() => {
              console.log('지금 삭제 클릭한 item의 id는', item.id)
              console.log('지금 이 시각에 list의 정보는', list)
              onCloseClick(item.id)
            }}
            state={item.state}
            mode={item.mode}
            description={item?.description}
          />
        )
      })}
    </div>
  )
}
