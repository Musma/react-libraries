import classNames from 'classnames'
import { PropsWithChildren, useMemo } from 'react'

import { CaptionProps } from '../types'

export const Caption = ({
  className = '',
  variant = 'caption1',
  children,
}: PropsWithChildren<CaptionProps>) => {
  const style = useMemo(() => {
    return {
      caption1: 'text-[12px] font-normal leading-4',
      caption2: 'text-[10px] font-normal leading-[14px]',
    }[variant]
  }, [variant])
  return <span className={classNames(style, className)}>{children}</span>
}
