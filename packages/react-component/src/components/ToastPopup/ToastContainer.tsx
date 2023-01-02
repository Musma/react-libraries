import { Fragment } from 'react'

import { ToastPopup } from './ToastPopup'
import { useToastContext } from './ToastPopupContext'
import { IToastContainerProps, IToastPopupData } from './ToastPopupTypes'

export const ToastContainer = ({ height = '0px' }: IToastContainerProps) => {
  const { list, removeToast } = useToastContext()

  return list.length ? (
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
            onCloseClick={() => removeToast(item)}
            state={item.state}
            mode={item.mode}
            description={item?.description}
          />
        )
      })}
    </div>
  ) : (
    <Fragment />
  )
}
