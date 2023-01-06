import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

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
  const limit = 5 // list의 제한 길이

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
