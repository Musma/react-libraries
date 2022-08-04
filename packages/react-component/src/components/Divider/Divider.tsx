import { HTMLAttributes } from 'react'
import classNames from 'classnames'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
}

export const Divider = ({ orientation = 'horizontal', className, ...rest }: DividerProps) => {
  return (
    <hr
      className={classNames(
        { 'border-t-[#E5E5E5]': orientation === 'horizontal' },
        { 'h-full w-[1px] border-r border-r-[#E5E5E5]': orientation === 'vertical' },
        className,
      )}
      {...rest}
    />
  )
}
