export interface IToastPopupList {
  id: number
  state?: 'info' | 'warning' | 'error' | 'success'
  title: string
  description?: string
  mode?: 'light' | 'dark'
}

export interface IToastPopupProps extends IToastPopupList {
  onCloseClick(): void
}

export interface IToastContainerProps {
  height: string
  newToastPopup?: IToastPopupList
}
