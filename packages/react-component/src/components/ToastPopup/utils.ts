import { isValidElement } from 'react'

import { Toast, ToastItem, ToastStatus } from '.'

export const isNum = (v: any): v is number => typeof v === 'number' && !isNaN(v)

export const isStr = (v: any): v is string => typeof v === 'string'

export const isFn = (v: any): v is Function => typeof v === 'function'

export const parseClassName = (v: any) => (isStr(v) || isFn(v) ? v : null)

export const getAutoCloseDelay = (
  toastAutoClose?: false | number,
  containerAutoClose?: false | number,
) =>
  toastAutoClose === false || (isNum(toastAutoClose) && toastAutoClose > 0)
    ? toastAutoClose
    : containerAutoClose

export const canBeRendered = <T>(content: T): boolean =>
  isValidElement(content) || isStr(content) || isFn(content) || isNum(content)

// 토스트 팝업의 props를 받아서 element로 반환하는 함수
export function toToastItem(toast: Toast, status: ToastStatus): ToastItem {
  return {
    content: toast.content,
    containerId: toast.props.containerId,
    id: toast.props.toastId,
    data: toast.props.data || {},
    isLoading: toast.props.isLoading,
    status,
  }
}
