import { useState, useRef, useEffect, useReducer } from 'react'

import {
  ContainerInstance,
  Id,
  Event,
  NotValidatedToastProps,
  ToastContent,
  ToastContainerProps,
  Toast,
  QueuedToast,
  ToastProps,
} from '.'
import { eventManager } from './eventManager'
import { canBeRendered, getAutoCloseDelay, toToastItem } from './utils'

export const useToastContainer = (props: ToastContainerProps) => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0)
  const [toastIds, setToastIds] = useState<Id[]>([])
  const containerRef = useRef(null)
  const toastToRender = useRef(new Map<Id, Toast>()).current
  const isToastActive = (id: Id) => toastIds.indexOf(id) !== -1
  const instance = useRef<ContainerInstance>({
    toastKey: 1,
    displayedToast: 0,
    count: 0,
    queue: [], // 대기 중인 토스트 팝업들
    props,
    containerId: null,
    isToastActive,
    getToast: (id) => toastToRender.get(id),
  }).current

  function isNotValid(options: NotValidatedToastProps) {
    return (
      !containerRef.current ||
      (instance.props.enableMultiContainer && options.containerId !== instance.props.containerId)
    )
  }

  // toast popup instance build
  function buildToast(
    content: ToastContent,
    { delay, staleId, ...options }: NotValidatedToastProps,
  ) {
    // content와 options이 유효한지 확인
    if (!canBeRendered(content) || isNotValid(options)) return

    const { toastId, data } = options
    const { props } = instance
    const closeToast = () => removeToast(toastId)

    const toastProps = {
      ...props,
      key: instance.toastKey++,
      ...options,
      toastId,
      data,
      closeToast,
      isIn: false,
      autoClose: options.isLoading ? false : getAutoCloseDelay(options.autoClose, props.autoClose),
      deleteToast: () => {
        const removed = toToastItem(toastToRender.get(toastId)!, 'removed')
        toastToRender.delete(toastId)
        eventManager.emit(Event.Change, removed)

        // 컨테이너에 있는 토스트 팝업 인스턴스 정리
        const queueLen = instance.queue.length
        instance.count =
          toastId == null ? instance.count - instance.displayedToast : instance.count - 1

        if (instance.count < 0) instance.count = 0

        if (queueLen > 0) {
          // 제한 길이에 비해 여유로운 슬롯
          const freeSlot = toastId == null ? instance.props.limit! : 1

          // 여유 슬롯 수에 맞춰서 대기중인 토스트 팝업 빼오기
          if (queueLen === 1 || freeSlot === 1) {
            instance.displayedToast++
            dequeueToast()
          } else {
            const toDequeue = freeSlot > queueLen ? queueLen : freeSlot
            instance.displayedToast = toDequeue

            for (let i = 0; i < toDequeue; i++) dequeueToast()
          }
        } else {
          forceUpdate()
        }
      },
    } as ToastProps
  }

  function appendToast(content: ToastContent, toastProps: ToastProps, staleId?: Id) {
    const { toastId } = toastProps

    // timeout 된 토스트 팝업은 제거
    if (staleId) toastToRender.delete(staleId)

    const toast = {
      content,
      props: toastProps,
    }
    toastToRender.set(toastId, toast)

    setToastIds((state) => [...state, toastId].filter((id) => id !== staleId))
    eventManager.emit(Event.Change, toToastItem(toast, 'added'))
  }

  function removeToast(toastId?: Id) {
    setToastIds((state) => (toastId == null ? [] : state.filter((id) => id !== toastId)))
  }

  // 대기열에 있는 토스트 팝업 가져오기
  function dequeueToast() {
    const { toastContent, toastProps, staleId } = instance.queue.shift() as QueuedToast
    appendToast(toastContent, toastProps, staleId)
  }

  // 토스트 팝업 가져와서 렌더링 시키기
  function getToastToRender<T>(cb: (toastList: Toast[]) => T) {
    const toRender = new Map<Id, Toast[]>()
    const collection = Array.from(toastToRender.values())

    if (props.newestOnTop) collection.reverse()

    collection.forEach((toast) => {
      const { containerId } = toast.props
      if (containerId) {
        toRender.has(containerId) || toRender.set(containerId, [])
        toRender.get(containerId)?.push(toast)
      }
    })

    return Array.from(toRender, (p) => cb(p[1]))
  }

  useEffect(() => {
    instance.containerId = props.containerId
    eventManager
      .cancelEmit(Event.WillUnmount)
      .on(Event.Show, buildToast)
      .on(Event.Clear, (toastId) => containerRef.current && removeToast(toastId))
      .emit(Event.DidMount, instance)

    return () => {
      toastToRender.clear()
      eventManager.emit(Event.WillUnmount, instance)
    }
  }, [])

  return {
    getToastToRender,
    containerRef,
    isToastActive,
  }
}
