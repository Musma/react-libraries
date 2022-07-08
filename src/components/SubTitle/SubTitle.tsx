import classNames from 'classnames'
import { HTMLAttributes, ReactNode, useMemo } from 'react'

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  className?: string
  element?: 1 | 2 | 3
}

export const SubTitle = ({ className = '', element = 1, children, ...rest }: Props) => {
  const style = useMemo(() => {
    const options = new Map()
    options.set(1, 'text-[20px] font-normal leading-none tracking-[-0.2px]')
    options.set(2, 'text-[14px] font-semibold leading-5')
    options.set(3, 'text-[12px] font-semibold leading-[18px]')
    return options.get(element)
  }, [element])
  return (
    <p className={classNames(style, className)} {...rest}>
      {children}
    </p>
  )
}
