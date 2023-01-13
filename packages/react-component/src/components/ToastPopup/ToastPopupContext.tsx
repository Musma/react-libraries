import { createContext, useCallback, useContext, useEffect, useState } from 'react'
// import { ToastContainer } from 'react-toastify'

import { uniqueId } from '@musma/react-utils'

import {
  ToastContainer,
  IToastContextProviderProps,
  IToastPopupContext,
  IToastPopupData,
  IToastPopupInstance,
  toastPopupManager,
} from '.'

import 'react-toastify/dist/ReactToastify.css'

export const ToastPopupContext = createContext<IToastPopupContext>(undefined!)

export const useToastContext = (): IToastPopupContext => {
  return useContext(ToastPopupContext)
}

export const ToastContextProvider = ({ children, ...props }: IToastContextProviderProps) => {
  const [list, setList] = useState<IToastPopupInstance[]>([]) // 현재 화면에 떠있는 토스트 팝업들

  const addToast = useCallback(
    (toastPopup: IToastPopupData) => {
      setList(
        toastPopupManager.add({
          ...toastPopup,
          id: toastPopup.id || uniqueId(),
        }),
      )
    },
    [list],
  )

  const removeToast = useCallback(
    (toastPopup: IToastPopupInstance) => {
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
