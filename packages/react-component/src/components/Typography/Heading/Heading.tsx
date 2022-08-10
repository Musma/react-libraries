import classNames from 'classnames'
import { createElement, PropsWithChildren, useMemo } from 'react'

import { HeadingProps } from '../types'

export const Heading = ({
  color = '',
  className = '',
  variant = 'h1',
  children,
}: PropsWithChildren<HeadingProps>) => {
  const style = useMemo(() => {
    return {
      h1: 'text-[40px] font-bold leading-[56px] tracking-[-0.6px]',
      h2: 'text-[32px] font-bold leading-[48px] tracking-[-0.6px]',
      h3: 'text-[24px] font-semibold leading-[32px] tracking-[-0.6px]',
      h4: 'text-[20px] font-semibold leading-[30px] tracking-[-0.2px]',
      h5: 'text-[18px] font-semibold leading-6 tracking-[-0.2px]',
      h6: 'text-[16px] font-semibold leading-6 tracking-[-0.2px]',
    }[variant]
  }, [variant])

  return createElement(
    variant,
    {
      className: classNames(style, className),
      style: { color },
    },
    children,
  )
}
