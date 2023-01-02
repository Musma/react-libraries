import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'

import { toastPopupManager } from './ToastPopupManager'
import { IToastPopupData } from './ToastPopupTypes'

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
  const limit = 5
  const queue: IToastPopupData[] = useMemo(() => [], [])
  const [list, setList] = useState<IToastPopupData[]>(toastPopupManager.list)

  const addToast = useCallback(
    (toastPopup: IToastPopupData) => {
      // 제한 갯수에 걸리면
      if (checkLimit()) {
        enqueue(toastPopup)
        // 걸리지 않으면 리스트에 추가
      } else {
        setList(toastPopupManager.add(toastPopup))
      }
    },
    [list],
  )

  const removeToast = useCallback(
    (toastPopup: IToastPopupData) => {
      setList(toastPopupManager.remove(toastPopup))
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

  const checkQueue = () => {
    if (queue[0]) {
      return true
    }
    return false
  }

  /**
   * 토스트 팝업 갯수가 제한에 도달했을 때 queue(대기열)로 이동
   */
  const enqueue = useCallback((toastPopup: IToastPopupData) => {
    queue.push(toastPopup)
  }, [])

  /**
   * 토스트 팝업이 삭제될 때 queue(대기열)에 팝업이 있다면 가져오기
   */
  const dequeue = useCallback(() => {
    if (queue[0]) {
      const target = queue.shift() as IToastPopupData
      setList((current) => {
        const newCurrent = [...current]
        newCurrent.unshift(target)
        return newCurrent
      })
    }
  }, [])

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
