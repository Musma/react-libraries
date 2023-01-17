import { Fragment } from 'react'

import { useMusmaTheme } from 'src/theme'

import { ToastPopup } from './ToastPopup'
import { useToastContext } from './ToastPopupContext'
import { IToastContainerProps, IToastPopupData } from './ToastPopupTypes'

export const ToastContainer = ({
  headerHeight,
  position = 'top-center',
  ...rest
}: IToastContainerProps) => {
  const { list, removeToast } = useToastContext()
  const { zIndex, layoutSize } = useMusmaTheme()

  // 토스트 팝업이 없으면 DOM에서 사라지기
  return list.length ? (
    <div
      css={{
        position: 'fixed',
        top: headerHeight || layoutSize.headerHeight,
        right: position === 'top-right' ? 10 : '50%',
        transform: position === 'top-right' ? undefined : 'translate(50%, 0)',
        zIndex: zIndex.toastPopup,
      }}
      id="toastPopup-container"
      {...rest}
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
