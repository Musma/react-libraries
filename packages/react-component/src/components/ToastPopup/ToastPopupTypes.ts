export interface IToastPopupData {
  id: number
  state?: 'info' | 'warning' | 'error' | 'success'
  title: string
  description?: string
  mode?: 'light' | 'dark'
}

export interface IToastPopupProps extends IToastPopupData {
  onCloseClick(): void
}

export interface IToastContainerProps {
  height: string
  newToastPopup?: IToastPopupData
}
