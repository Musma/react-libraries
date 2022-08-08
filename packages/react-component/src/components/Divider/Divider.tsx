import { HTMLAttributes } from 'react'
import classNames from 'classnames'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
  /**
   * vertical에 한해, 높이를 조절하고 싶은 경우 height props를 이용하면 됩니다
   */
  height?: number
}

export const Divider = ({
  height,
  orientation = 'horizontal',
  className,
  ...rest
}: DividerProps) => {
  return (
    <hr
      className={classNames(
        { 'w-full border-t border-t-[#E5E5E5]': orientation === 'horizontal' },
        { 'h-full w-[1px] border-r border-r-[#E5E5E5]': orientation === 'vertical' },
        className,
      )}
      {...rest}
      style={{ height }}
    />
  )
}
