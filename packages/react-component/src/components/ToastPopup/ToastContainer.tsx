import { useEffect, useState } from 'react'

import { IToastPopupList } from '.'
import { ToastPopup } from './ToastPopup'
import { toastPopupManager } from './ToastPopupManager'

interface IToastContainerProps {
  height: string
  newToastPopup?: IToastPopupList
}

export const ToastContainer = ({ height, newToastPopup }: IToastContainerProps) => {
  const [list, setList] = useState<IToastPopupList[]>(toastPopupManager.list)

  const handleClose = (toastPopup: IToastPopupList) => {
    toastPopupManager.remove(toastPopup)
    setList(toastPopupManager.list)
  }

  useEffect(() => {
    if (newToastPopup) {
      toastPopupManager.add(newToastPopup)
      setList(toastPopupManager.list)
    }
  }, [newToastPopup])

  return (
    <div
      css={{
        position: 'fixed',
        top: `calc(${height} + 16px)`,
        right: 10,
        zIndex: 9999,
      }}
    >
      {list.map((item: IToastPopupList) => {
        return (
          <ToastPopup
            key={item.id}
            id={item.id}
            title={item.title}
            onCloseClick={() => handleClose(item)}
            state={item.state}
            mode={item.mode}
            description={item?.description}
          />
        )
      })}
    </div>
  )
}
