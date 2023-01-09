export const AUTO_CLOSE_TIME = 1000 * 3.5 // 자동 close 될 시간

export type ToastPopupStateType = 'info' | 'warning' | 'error' | 'success'
export type ToastPopupModeType = 'light' | 'dark'
export type ToastPopupPositionType = 'top-center' | 'top-right'
export interface IToastPopupData {
  id: string
  type?: ToastPopupStateType
  title: string
  description?: string
  mode?: ToastPopupModeType
}

export interface IToastPopupProps extends IToastPopupData {
  onCloseClick(): void
}

export interface IToastContainerProps {
  height: string
  position?: ToastPopupPositionType
}
