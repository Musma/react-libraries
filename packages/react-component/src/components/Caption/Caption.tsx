import classNames from 'classnames'
import { HTMLAttributes, ReactNode, useMemo } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  element?: 'c1' | 'c2'
}

export const Caption = ({ className = '', element = 'c1', children, ...rest }: Props) => {
  const style = useMemo(() => {
    return {
      c1: 'text-[12px] font-normal leading-4',
      c2: 'text-[10px] font-normal leading-[14px]',
    }[element]
  }, [element])
  return (
    <span className={classNames(style, className)} {...rest}>
      {children}
    </span>
  )
}
