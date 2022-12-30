import { RefObject } from 'react'

export interface IToastPopupData {
  id: string
  state?: 'info' | 'warning' | 'error' | 'success'
  title: string
  description?: string
  mode?: 'light' | 'dark'
  ref?: RefObject<HTMLDivElement>
}

export interface IToastPopupProps extends IToastPopupData {
  onCloseClick(): void
}

export interface IToastContainerProps {
  height: string
}
