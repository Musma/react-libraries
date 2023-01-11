import { Fragment } from 'react'

import { useMusmaTheme } from 'src/theme'

import { ToastPopup } from './ToastPopup'
import { useToastContext } from './ToastPopupContext'
import { IToastContainerProps, IToastPopupData } from './ToastPopupTypes'

export const ToastContainer = ({
  height = '0px',
  position = 'top-center',
}: IToastContainerProps) => {
  const { list, removeToast } = useToastContext()
  const { zIndex } = useMusmaTheme()

  return list.length ? (
    <div
      css={{
        position: 'fixed',
        top: height,
        right: position === 'top-right' ? 10 : '50%',
        transform: position === 'top-right' ? undefined : 'translate(50%, 0)',
        zIndex: zIndex.toastPopup,
      }}
      id="react-portal-toastPopup"
    >
      {list.map((item: IToastPopupData) => {
        return (
          <ToastPopup
            key={item.id}
            id={item.id}
            title={item.title}
            onCloseClick={() => removeToast(item)}
            type={item.type}
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
