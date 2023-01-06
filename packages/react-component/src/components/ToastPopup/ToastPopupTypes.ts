export type ToastPopupStateType = 'info' | 'warning' | 'error' | 'success'
export type ToastPopupModeType = 'light' | 'dark'
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
}
