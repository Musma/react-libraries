import { HTMLAttributes, ReactNode } from 'react'

export const AUTO_CLOSE_TIME = 1000 * 3.5 // 자동 close 될 시간
export const FLOAT_TO_TOP = '16px'

export type ToastPopupStateType = 'info' | 'warning' | 'error' | 'success'
export type ToastPopupModeType = 'light' | 'dark'
export type ToastPopupPositionType = 'top-center' | 'top-right'
export interface IToastPopupData {
  id?: string
  type?: ToastPopupStateType
  title: string
  description?: string
  mode?: ToastPopupModeType
}

export interface IToastPopupInstance extends IToastPopupData {
  id: string
}

export interface IToastPopupProps extends IToastPopupInstance {
  onCloseClick(): void
}
export interface IToastContainerProps extends HTMLAttributes<HTMLElement> {
  /**
   * 브라우저 상단에서 기본으로 떨어져야하는 높이 값
   * @default useMusmaTheme().layoutSize.headerHeight = 48px
   */
  headerHeight?: string
  position?: ToastPopupPositionType
  limit?: number
  /**
   * 토스트 팝업이 쌓이는 방향
   * @default false 아래로 쌓임
   */
  newestOnTop?: boolean
}

export interface IToastPopupContext {
  list: IToastPopupInstance[]
  addToast: (toastPopup: IToastPopupData) => void
  removeToast: (toastPopup: IToastPopupInstance) => void
  setLimit: (newLimit: number) => void
}

export interface IToastContextProviderProps extends IToastContainerProps {
  children: ReactNode
}

export interface IToastPopupContext {
  list: IToastPopupData[]
  addToast: (toastPopup: IToastPopupData) => void
  removeToast: (toastPopup: IToastPopupData) => void
  setLimit: (newLimit: number) => void
}

export interface IToastContextProviderProps {
  children: ReactNode
  initLimit?: number
}
