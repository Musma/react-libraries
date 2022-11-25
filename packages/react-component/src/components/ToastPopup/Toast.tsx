import { useEffect, useState } from 'react'

import { IToastPopupListProps } from 'src/examples'

import { ToastPopup } from './ToastPopup'

interface IToastProps {
  height: string
  toastList: IToastPopupListProps[]
}

export const Toast = ({ height, toastList }: IToastProps) => {
  const [list, setList] = useState<IToastPopupListProps[]>([])

  useEffect(() => {
    setList(toastList)
  }, [toastList])

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
            onCloseClick={() => item.onCloseClick(item.id)}
            state={item.state}
            mode={item.mode}
          />
        )
      })}
    </div>
  )
}
