import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'

import { toastPopupManager } from './ToastPopupManager'
import { IToastPopupData, IToastPopupInstance } from './ToastPopupTypes'

export interface IToastPopupContext {
  list: IToastPopupData[]
  addToast: (toastPopup: IToastPopupData) => void
  removeToast: (toastPopup: IToastPopupData) => void
}

export const ToastPopupContext = createContext<IToastPopupContext>(undefined!)

export const useToastContext = (): IToastPopupContext => {
  return useContext(ToastPopupContext)
}

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const limit = 5 // list의 제한 길이
  const AUTO_CLOSE_TIME = 1000 * 3.5 // 자동 close 될 시간

  const queue: IToastPopupInstance[] = useMemo(() => [], []) // 제한에 걸려서 대기중인 토스트 팝업들
  const emitQueue: IToastPopupInstance[] = useMemo(() => [], []) // clearTimeout을 위한 큐

  const [list, setList] = useState<IToastPopupInstance[]>(toastPopupManager.list) // 현재 화면에 떠있는 토스트 팝업들

  const addToast = useCallback(
    (toastPopup: IToastPopupData) => {
      const newToastPopup: IToastPopupInstance = {
        ...toastPopup,
        isActive: true,
      }
      // 제한 갯수에 걸리면 대기열에 팝업 추가
      if (checkLimit()) {
        enQueue(newToastPopup)
        // 걸리지 않으면 리스트에 팝업 추가
      } else {
        setList(toastPopupManager.add(newToastPopup))
        // setTimer(newToastPopup)
      }
    },
    [list],
  )

  const removeToast = useCallback(
    (toastPopup: IToastPopupData) => {
      setList(toastPopupManager.remove(toastPopup))
      // 대기열에 팝업이 있으면 가져오기
      if (checkQueue()) {
        deQueue()
      }
    },
    [list],
  )

  /**
   * 제한 갯수에 걸리는지 확인
   * @returns 걸린다(true) / 안걸린다(false)
   */
  const checkLimit = useCallback(() => {
    if (list.length - 1 >= limit) {
      return true
    }
    return false
  }, [list.length])

  /**
   * 대기열에 팝업이 있는지 확인
   * @returns 있다(true) / 없다(false)
   */
  const checkQueue = () => {
    if (queue?.[0]) {
      return true
    }
    return false
  }

  /**
   * 토스트 팝업 갯수가 제한에 도달했을 때 queue(대기열)로 이동
   */
  const enQueue = useCallback((toastPopup: IToastPopupInstance) => {
    queue.push(toastPopup)
  }, [])

  /**
   * 토스트 팝업이 삭제될 때 queue(대기열)에 팝업이 있다면 가져오기
   */
  const deQueue = useCallback(() => {
    const target = queue.shift() as IToastPopupInstance
    addToast(target)
    // setTimer(target)
  }, [])

  /**
   * AUTO_CLOSE_TIME 후에 list 수정하고 emitQueue에 토스트 팝업 추가
   */
  // const setTimer = (toastPopup: IToastPopupInstance) => {
  //   const target = toastPopupManager.get(toastPopup.id)
  //   if (target?.isActive) {
  //     target.isActive = false
  //   }

  //   const timer = setTimeout(() => {
  //     if (target) {
  //       setList(toastPopupManager.edit(target))
  //     }
  //   }, AUTO_CLOSE_TIME)

  //   emitQueue.push({ ...target, timer })
  // }

  // const clearTimer = () => {
  //   if (emitQueue?.[0]) {
  //   }
  // }

  return (
    <ToastPopupContext.Provider
      value={{
        list,
        addToast,
        removeToast,
      }}
    >
      {children}
    </ToastPopupContext.Provider>
  )
}
