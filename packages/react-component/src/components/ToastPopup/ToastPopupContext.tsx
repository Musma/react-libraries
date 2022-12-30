import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

import { toastPopupManager } from './ToastPopupManager'
import { IToastPopupData } from './ToastPopupTypes'

export interface IToastPopupContext {
  list: IToastPopupData[]
  handleOpen: (toastPopup: IToastPopupData) => void
  handleClose: (toastPopup: IToastPopupData) => void
}

export const ToastPopupContext = createContext<IToastPopupContext>(undefined!)

export const useToastContext = (): IToastPopupContext => {
  return useContext(ToastPopupContext)
}

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<IToastPopupData[]>(toastPopupManager.list)
  console.log('list', list)

  const handleOpen = useCallback(
    (toastPopup: IToastPopupData) => {
      setList(toastPopupManager.add(toastPopup))
    },
    [list],
  )

  const handleClose = useCallback(
    (toastPopup: IToastPopupData) => {
      setList(toastPopupManager.remove(toastPopup))
    },
    [list],
  )

  return (
    <ToastPopupContext.Provider
      value={{
        list,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </ToastPopupContext.Provider>
  )
}
