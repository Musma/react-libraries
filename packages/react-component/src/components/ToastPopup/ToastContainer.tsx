import { Fragment, useEffect, useState } from 'react'

import { IToastContainerProps, IToastPopupData } from '.'
import { ToastPopup } from './ToastPopup'
import { toastPopupManager } from './ToastPopupManager'

export const ToastContainer = ({ height = '0px', newToastPopup }: IToastContainerProps) => {
  const [list, setList] = useState<IToastPopupData[]>(toastPopupManager.list)

  const handleClose = (toastPopup: IToastPopupData) => {
    setList(toastPopupManager.remove(toastPopup))
  }

  // 들어오는 ToastPopup이 다를 때마다 ToastPopupManager에 추가하고 list 동기화
  useEffect(() => {
    if (newToastPopup) {
      setList(toastPopupManager.add(newToastPopup))
    }
  }, [newToastPopup])

  return newToastPopup ? (
    <div
      css={{
        position: 'fixed',
        top: height,
        right: 10,
        zIndex: 9999,
      }}
    >
      {list.map((item: IToastPopupData) => {
        return (
          <ToastPopup
            key={item.id}
            id={item.id}
            title={item.title}
            onCloseClick={() => handleClose(item)}
            state={item.state}
            mode={item.mode}
            description={item?.description}
            ref={item.ref}
          />
        )
      })}
    </div>
  ) : (
    <Fragment />
  )
}
