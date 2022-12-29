import { forwardRef, Fragment, useEffect } from 'react'

import { IToastPopupData, Toast, ToastContainerProps, useToastContainer } from '.'
import { ToastPopup } from './ToastPopup'

export const ToastContainer = forwardRef<HTMLDivElement, ToastContainerProps>((props, ref) => {
  // const [list, setList] = useState<IToastPopupData[]>(toastPopupManager.list)

  // const handleClose = (toastPopup: IToastPopupData) => {
  //   setList(toastPopupManager.remove(toastPopup))
  // }

  // // 들어오는 ToastPopup이 다를 때마다 ToastPopupManager에 추가하고 list 동기화
  // useEffect(() => {
  //   if (newToastPopup) {
  //     setList(toastPopupManager.add(newToastPopup))
  //   }
  // }, [newToastPopup])

  const { getToastToRender, containerRef, isToastActive } = useToastContainer(props)
  const { height, newToastPopup, containerId } = props

  useEffect(() => {
    if (ref) {
      ;(ref as React.MutableRefObject<HTMLDivElement>).current = containerRef.current!
    }
  }, [])

  return newToastPopup ? (
    <div
      css={{
        position: 'fixed',
        top: height,
        right: 10,
        zIndex: 9999,
      }}
      ref={containerRef}
    >
      {getToastToRender((toastList: Toast[]) => {
        return (
          <Fragment>
            {toastList.map((item: Toast) => {
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
          </Fragment>
        )
      })}
    </div>
  ) : (
    <Fragment />
  )
})

ToastContainer.displayName = 'ToastContainer'

ToastContainer.defaultProps = {
  height: '50px',
}
