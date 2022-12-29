import { RefObject, ReactNode } from 'react'

import { Id, CommonOptions } from './base'

export type ToastItemStatus = 'info' | 'warning' | 'error' | 'success'

export type ToastStatus = 'added' | 'removed'

export interface IToastPopupData extends Id {
  state?: ToastItemStatus
  title: string
  description?: string
  mode?: 'light' | 'dark' // default: light
  ref?: RefObject<HTMLDivElement>
}

export interface IToastPopupProps<Data = {}> extends IToastPopupData {
  onCloseClick(): void
  data?: Data
}

export interface NotValidatedToastProps extends Partial<ToastProps> {
  toastId: Id
}

export interface Toast {
  content: ToastContent
  props: ToastProps
}

export type ToastContent<T = unknown> =
  | React.ReactNode
  | ((props: IToastPopupProps<T>) => ReactNode)

export interface QueuedToast {
  toastContent: ReactNode
  toastProps: ToastProps
  staleId?: Id
}

export interface ToastItem<Data = {}> {
  content: ToastContent<Data>
  id: Id
  isLoading?: boolean
  containerId?: Id
  data: Data
  status: ToastStatus
}

export interface ToastOptions<Data = {}> extends CommonOptions {
  onOpen?: <T = {}>(props: T) => void
  onClose?: <T = {}>(props: T) => void
  type?: ToastItemStatus
  toastId?: Id
  delay?: number
  isLoading?: boolean
  data?: Data
}

export interface ToastProps extends ToastOptions {
  isIn: boolean
  staleId?: Id
  toastId: Id
  key: Id
  closeToast: () => void
  children?: ToastContent
  deleteToast: () => void
  type: ToastItemStatus
  iconOut?: ReactNode
}
