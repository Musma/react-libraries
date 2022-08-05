import classNames from 'classnames'
import { useMemo } from 'react'
import { Size } from 'src/types'

interface ToggleButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: Size
}

export const ToggleButton = ({ size = 'lg', disabled, ...rest }: ToggleButtonProps) => {
  const innerCircle = useMemo(() => {
    const sizes = {
      lg: 'before:ml-[1.8px] before:mt-[1.8px] before:h-[9.6px] before:w-[9.6px]',
      md: 'before:ml-[1px] before:mt-[1px] before:h-[6px] before:w-[6px]',
      sm: 'before:ml-[1.05px] before:mt-[1px] before:h-[5.6px] before:w-[5.6px]',
    }
    const animation = {
      lg: 'checked:before:translate-x-[10.79px]',
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
      lg: 'h-[13.2px] w-6',
      md: 'h-2 w-4',
      sm: 'h-[7.7px] w-[14px]',
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
    <label className="flex h-6 w-6 items-center justify-center">
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
    </label>
  )
}
