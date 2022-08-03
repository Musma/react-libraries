import { HTMLAttributes } from 'react'
import classNames from 'classnames'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
}

export const Divider = ({ orientation = 'horizontal', className, ...rest }: DividerProps) => {
  return (
    <hr
      {...rest}
      className={classNames(
        `m-0 flex-shrink-0 border-[#BAC7D5]`,
        orientation === 'vertical' && 'h-auto self-stretch border-r-[1px]',
        className,
      )}
    />
  )
}
