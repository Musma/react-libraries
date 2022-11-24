import { useState } from 'react'

import { ToastPopup } from '.'

interface IProps {
  id: number
  height?: string // header의 높이(단위까지 입력하기, 기본 설정은 0px)
  isOpen: boolean
  setIsOpen(open: boolean): void
  state?: 'info' | 'warning' | 'error' | 'success'
  title: string
  description?: string
  mode?: 'light' | 'dark'
}

export const ToastContainer = () => {
  const [toastList, setToastList] = useState<IProps[]>([])

  return (
    <div>
      {toastList.map((item: IProps) => {
        return (
          <ToastPopup
            key={item.id}
            height={item.height}
            isOpen={item.isOpen}
            setIsOpen={item.setIsOpen}
            state={item.state}
            title={item.title}
            description={item.description}
            mode={item.mode}
          />
        )
      })}
    </div>
  )
}
