import { createContext, useCallback, useContext, useEffect, useState } from 'react'

import { ToastContainer } from '.'
import { toastPopupManager } from './ToastPopupManager'
import { IToastContextProviderProps, IToastPopupContext, IToastPopupData } from './ToastPopupTypes'

export const ToastPopupContext = createContext<IToastPopupContext>(undefined!)

export const useToastContext = (): IToastPopupContext => {
  return useContext(ToastPopupContext)
}

export const ToastContextProvider = ({ children, ...props }: IToastContextProviderProps) => {
  const [list, setList] = useState<IToastPopupData[]>([]) // 현재 화면에 떠있는 토스트 팝업들

  const addToast = useCallback(
    (toastPopup: IToastPopupData) => {
      // 제한 갯수에 걸리면 대기열에 팝업 추가
      if (checkLimit()) {
        enqueue(toastPopup)
        // 걸리지 않으면 리스트에 팝업 추가
      } else {
        setList(toastPopupManager.add(toastPopup))
      }
    },
    [list],
  )

  const removeToast = useCallback(
    (toastPopup: IToastPopupData) => {
      setList(toastPopupManager.remove(toastPopup))
      // 대기열에 팝업이 있으면 가져오기
      if (checkQueue()) {
        dequeue()
      }
    },
    [list],
  )

  const setLimit = useCallback((newLimit: number) => {
    if (toastPopupManager.limit !== newLimit) {
      setList(toastPopupManager.setLimit(newLimit))
    }
  }, [])

  useEffect(() => {
    props.limit && setLimit(props.limit)
  }, [])

  return (
    <ToastPopupContext.Provider
      value={{
        list,
        addToast,
        removeToast,
        setLimit,
      }}
    >
      <ToastContainer {...props} />
      {children}
    </ToastPopupContext.Provider>
  )
}
