import classNames from 'classnames'
import { createElement, HTMLAttributes, useMemo } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading = ({ className = '', element = 'h1', ...rest }: Props) => {
  const style = useMemo(() => {
    return {
      h1: 'text-[40px] font-bold leading-[56px] tracking-[-0.6px]',
      h2: 'text-[32px] font-bold leading-[48px] tracking-[-0.6px]',
      h3: 'text-[24px] font-semibold leading-[32px] tracking-[-0.6px]',
      h4: 'text-[20px] font-semibold leading-[30px] tracking-[-0.2px]',
      h5: 'text-[18px] font-semibold leading-6 tracking-[-0.2px]',
      h6: 'text-[16px] font-semibold leading-6 tracking-[-0.2px]',
    }[element]
  }, [element])

  return createElement(element, {
    className: classNames(style, className),
    ...rest,
  })
}
