import classNames from 'classnames'
import { HTMLAttributes, ReactNode, useMemo } from 'react'

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  className?: string
  element?: 'p1' | 'p2' | 'p3'
}

export const Paragraph = ({ children, element = 'p1', className = '', ...rest }: Props) => {
  const style = useMemo(() => {
    return {
      p1: 'text-[18px] font-normal leading-6 tracking-[-0.2px]',
      p2: 'text-[16px] font-normal leading-[22px] tracking-[-0.2px]',
      p3: 'text-[14px] font-normal leading-5',
    }[element]
  }, [element])

  return (
    <p className={classNames(style, className)} {...rest}>
      {children}
    </p>
  )
}
