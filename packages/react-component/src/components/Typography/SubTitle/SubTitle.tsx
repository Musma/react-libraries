import classNames from 'classnames'
import { PropsWithChildren, useMemo } from 'react'

import { SubTitleProps } from '../types'

export const SubTitle = ({
  className = '',
  variant = 'subTitle1',
  children,
}: PropsWithChildren<SubTitleProps>) => {
  const style = useMemo(() => {
    const options = new Map()
    options.set(1, 'text-[20px] font-normal leading-none tracking-[-0.2px]')
    options.set(2, 'text-[14px] font-semibold leading-5')
    options.set(3, 'text-[12px] font-semibold leading-[18px]')
    return options.get(variant)
  }, [variant])
  return <p className={classNames(style, className)}>{children}</p>
}
