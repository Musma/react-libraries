export const enum Event {
  Show,
  Clear,
  DidMount,
  WillUnmount,
  Change,
  ClearWaitingQueue,
}

type OnShowCallback = (content: ReactNode, options: IToastPopupProps) => void
type OnClearCallback = (id?: Id) => void
type OnClearWaitingQueue = (params: { containerId?: Id }) => void
type OnDidMountCallback = (containerInstance: ContainerInstance) => void
type OnWillUnmountCallback = OnDidMountCallback
type OnChangeCallback = (toast: IToastPopupData) => void

export type Callback =
  | OnShowCallback
  | OnClearCallback
  | OnClearWaitingQueue
  | OnDidMountCallback
  | OnWillUnmountCallback
  | OnChangeCallback

export type TimeoutId = ReturnType<typeof setTimeout>

export interface EventManager {
  list: Map<Event, Callback[]>
  emitQueue: Map<Event, TimeoutId[]>
  on(event: Event.Show, callback: OnShowCallback): EventManager
  on(event: Event.Clear, callback: OnClearCallback): EventManager
  on(event: Event.DidMount, callback: OnDidMountCallback): EventManager
  on(event: Event.WillUnmount, callback: OnWillUnmountCallback): EventManager
  on(event: Event.Change, callback: OnChangeCallback): EventManager
  off(event: Event, callback?: Callback): EventManager
  cancelEmit(event: Event): EventManager
  emit<TData>(
    event: Event.Show,
    content: React.ReactNode | ToastContent<TData>,
    options: IToastPopupProps,
  ): void
  emit(event: Event.Clear, id?: string | number): void
  emit(event: Event.DidMount, containerInstance: ContainerInstance): void
  emit(event: Event.WillUnmount, containerInstance: ContainerInstance): void
  emit(event: Event.Change, data: ToastItem): void
}
