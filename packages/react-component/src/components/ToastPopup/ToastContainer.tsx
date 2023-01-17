import { Fragment } from 'react'

import { useMusmaTheme } from 'src/theme'

import { ToastPopup, useToastContext, IToastContainerProps, IToastPopupData } from '.'

export const ToastContainer = ({
<<<<<<< HEAD
<<<<<<< HEAD
  headerHeight,
=======
  height,
>>>>>>> 818c395 (refactor: container의 기본 height 값을 무스마테마의 headerHeight 값으로 변경)
=======
  headerHeight,
>>>>>>> 2f214f9 (refactor: container와 popup의 float to top 값 변경)
  position = 'top-center',
  newestOnTop,
  ...rest
}: IToastContainerProps) => {
<<<<<<< HEAD
  const context = useToastContext()
  const { zIndex, layoutSize } = useMusmaTheme()

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
=======
  const { list, removeToast } = useToastContext()
  const { zIndex, layoutSize } = useMusmaTheme()

  // 토스트 팝업이 없으면 DOM에서 사라지기
  return list.length ? (
    <div
      css={{
        position: 'fixed',
        top: headerHeight || layoutSize.headerHeight,
        right: position === 'top-right' ? 10 : '50%',
>>>>>>> 818c395 (refactor: container의 기본 height 값을 무스마테마의 headerHeight 값으로 변경)
        transform: position === 'top-right' ? undefined : 'translate(50%, 0)',
        zIndex: zIndex.toastPopup,
      }}
      id="toastPopup-container"
      {...rest}
    >
      {context.list.map((item: IToastPopupData) => {
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

ToastContainer.displayName = 'ToastContainer'

ToastContainer.defaultProps = {
  height: '50px',
}
