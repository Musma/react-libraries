import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

import { toastPopupManager } from './ToastPopupManager'
import { IToastPopupData } from './ToastPopupTypes'

export interface IToastPopupContext {
  list: IToastPopupData[]
  addToast: (toastPopup: IToastPopupData) => void
  removeToast: (toastPopup: IToastPopupData) => void
  setLimit: (newLimit: number) => void
}

export const ToastPopupContext = createContext<IToastPopupContext>(undefined!)

export const useToastContext = (): IToastPopupContext => {
  return useContext(ToastPopupContext)
}

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<IToastPopupData[]>([]) // 현재 화면에 떠있는 토스트 팝업들

  const addToast = useCallback(
    (toastPopup: IToastPopupData) => {
      setList(toastPopupManager.add(toastPopup))
    },
    [list],
  )

  const removeToast = useCallback(
    (toastPopup: IToastPopupData) => {
      setList(toastPopupManager.remove(toastPopup))
    },
    [list],
  )

  const setLimit = useCallback((newLimit: number) => {
    if (toastPopupManager.limit !== newLimit) {
      setList(toastPopupManager.setLimit(newLimit))
    }
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
      {children}
    </ToastPopupContext.Provider>
  )
}
