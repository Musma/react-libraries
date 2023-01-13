import { createContext, useCallback, useContext, useEffect, useState } from 'react'
// import { ToastContainer } from 'react-toastify'

import { ToastContainer } from '.'
import { toastPopupManager } from './ToastPopupManager'
import { IToastContextProviderProps, IToastPopupContext, IToastPopupData } from './ToastPopupTypes'

import 'react-toastify/dist/ReactToastify.css'

export const ToastPopupContext = createContext<IToastPopupContext>(undefined!)

export const useToastContext = (): IToastPopupContext => {
  return useContext(ToastPopupContext)
}

export const ToastContextProvider = ({ children, ...props }: IToastContextProviderProps) => {
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
      {/* <ToastContainer position="top-center" containerId={'global'} enableMultiContainer /> */}
      <ToastContainer {...props} />
      {children}
    </ToastPopupContext.Provider>
  )
}
