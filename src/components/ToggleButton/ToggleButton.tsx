import classNames from 'classnames'
import { useMemo } from 'react'

import { Size } from 'src/types'

interface ToggleButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: Extract<Size, 'sm' | 'md' | 'lg'>
}

export const ToggleButton = ({ size = 'lg', disabled, ...rest }: ToggleButtonProps) => {
  const innerCircle = useMemo(() => {
    const sizes = {
      lg: 'before:ml-[1.5px] before:mt-[1.5px] before:h-2 before:w-2',
      md: 'before:ml-[1.5px] before:mt-[1.5px] before:h-[5px] before:w-[5px]',
      sm: 'before:ml-[1px] before:mt-[1px] before:h-1 before:w-1',
    }
    const animation = {
      lg: 'checked:before:translate-x-[9px]',
      md: 'checked:before:translate-x-2',
      sm: 'checked:before:translate-x-[6px]',
    }
    const color = {
      active: 'before:bg-white',
      disabled: 'before:bg-[#D0D5DD]',
    }
    if (disabled) return `${sizes[size]} ${color.disabled}`
    return `${sizes[size]} before:transition-transform ${animation[size]} ${color.active}`
  }, [size, disabled])

  const buttonSize = useMemo(() => {
    const options = {
      lg: 'h-[11px] w-5',
      md: 'h-2 w-4',
      sm: 'h-[6px] w-3',
    }
    return options[size]
  }, [size])
  const backgroundColor = useMemo(() => {
    const colors = {
      active: 'bg-[#D0D5DD] checked:bg-[#15AD60]',
      disabled: 'bg-[#F9FAFB]',
    }
    return disabled ? colors.disabled : colors.active
  }, [disabled])

  return (
    <input
      type="checkbox"
      className={classNames(
        'appearance-none rounded-[10px] before:block before:rounded-full before:content-[""]',
        buttonSize,
        backgroundColor,
        innerCircle,
      )}
      disabled={disabled}
      {...rest}
    />
  )
}
