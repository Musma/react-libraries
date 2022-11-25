import { useEffect, useState } from 'react'

import { IToastPopupProps, ToastPopup } from './ToastPopup'

interface IToastProps {
  height: string
  toastList: IToastPopupProps[]
}

export const Toast = ({ height, toastList }: IToastProps) => {
  const [list, setList] = useState<IToastPopupProps[]>(toastList)

  useEffect(() => {
    setList(toastList)
  }, [toastList, list])

  return (
    <div
      css={{
        position: 'fixed',
        top: `calc(${height} + 16px)`,
        right: 10,
        zIndex: 9999,
      }}
    >
      {toastList.map((item: IToastPopupProps) => {
        return (
          <ToastPopup
            key={item.title}
            title={item.title}
            onCloseClick={item.onCloseClick}
            state={item.state}
            mode={item.mode}
          />
        )
      })}
    </div>
  )
}
