import { Fragment } from 'react'

import { useTheme } from '@emotion/react'

import { ToastPopup, useToastContext, IToastContainerProps, IToastPopupInstance } from '.'

export const ToastContainer = ({
  headerHeight,
  position = 'top-center',
  newestOnTop,
  ...rest
}: IToastContainerProps) => {
  const context = useToastContext()
  const { zIndex, layoutSize } = useTheme()

  if (newestOnTop) {
    context.list = context.list.reverse()
  }

  // 토스트 팝업이 없으면 DOM에서 사라지기
  return context.list.length ? (
    <div
      css={{
        position: 'fixed',
        top: headerHeight || layoutSize.headerHeight,
        right: position === 'top-right' ? '10px' : '50%',
        transform: position === 'top-right' ? undefined : 'translate(50%, 0)',
        zIndex: zIndex.toastPopup,
      }}
      id="toastPopup-container"
      {...rest}
    >
      {context.list.map((item: IToastPopupInstance) => {
        return (
          <ToastPopup
            key={item.id}
            id={item.id}
            title={item.title}
            onCloseClick={() => context.removeToast(item)}
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
