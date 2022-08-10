import classNames from 'classnames'
import { PropsWithChildren, useMemo } from 'react'

import { SubTitleProps } from '../types'

export const SubTitle = ({
  color = '',
  className = '',
  variant = 'subTitle1',
  children,
}: PropsWithChildren<SubTitleProps>) => {
  const style = useMemo(() => {
    return {
      subTitle1: 'text-[20px] font-normal leading-none tracking-[-0.2px]',
      subTitle2: 'text-[14px] font-semibold leading-5',
      subTitle3: 'text-[12px] font-semibold leading-[18px]',
    }[variant]
  }, [variant])
  return (
    <p className={classNames(style, className)} style={{ color }}>
      {children}
    </p>
  )
}
