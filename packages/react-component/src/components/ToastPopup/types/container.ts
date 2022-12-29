import { Id, IToastPopupData, QueuedToast, Toast } from '.'

export interface ContainerInstance {
  toastKey: number
  displayedToast: number
  props: IToastContainerProps
  containerId?: Id | null
  isToastActive: (toastId: Id) => boolean
  getToast: (id: Id) => Toast | null | undefined
  queue: QueuedToast[]
  count: number
}

export interface IToastContainerProps {
  containerId: Id | null
  height: string
  newToastPopup?: IToastPopupData
}
