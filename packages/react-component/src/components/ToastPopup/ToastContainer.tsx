import { useEffect, useState } from 'react'

import { IToastContainerProps, IToastPopupData } from '.'
import { ToastPopup } from './ToastPopup'
import { toastPopupManager } from './ToastPopupManager'

// header의 height(ex. '10px')를 넘기면 디자인 가이드 상 height + 16px 띄워서 적용 => 추후에 height가 px이 아니어도 적용할 수 있도록 수정
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

  // 1초마다 맨 뒤에 있는 팝업 삭제 (왜냐, 팝업이 스택 형태로 쌓이기 때문)
  useEffect(() => {
    const timer = setInterval(() => {
      if (list.length) handleClose(list.at(-1) as IToastPopupData)
    }, 1000 * 1) // 임의로 1초를 해놨지만, 디자인 가이드 상 3.5초
    return () => clearInterval(timer)
  }, [list])

  return (
    <div
      css={{
        position: 'fixed',
        top: `calc(${height} + 16px)`,
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
          />
        )
      })}
    </div>
  )
}
