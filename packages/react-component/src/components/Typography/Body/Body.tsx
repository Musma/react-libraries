import classNames from 'classnames'
import { PropsWithChildren, useMemo } from 'react'

import { BodyProps } from '../types'

export const Body = ({
  variant = 'body1',
  className = '',
  children,
}: PropsWithChildren<BodyProps>) => {
  const style = useMemo(() => {
    return {
      body1: 'text-[18px] font-normal leading-6 tracking-[-0.2px]',
      body2: 'text-[16px] font-normal leading-[22px] tracking-[-0.2px]',
      body3: 'text-[14px] font-normal leading-5',
    }[variant]
  }, [variant])

  return <p className={classNames(style, className)}>{children}</p>
}
