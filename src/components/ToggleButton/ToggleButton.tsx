import classNames from 'classnames'
import { useMemo } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'lg' | 'md' | 'sm'
}

export const ToggleButton = ({ variant = 'lg', disabled, ...rest }: Props) => {
  const innerCircle = useMemo(() => {
    const sizes = {
      lg: 'before:ml-[1.5px] before:mt-[1.5px] before:h-2 before:w-2',
      md: 'before:ml-[1.5px] before:mt-[1.5px] before:h-[5px] before:w-[5px]',
      sm: 'before:ml-[1px] before:mt-[1px] before:h-1 before:w-1',
    }
    const animation = {
      lg: 'checked:before:translate-x-2',
      md: 'checked:before:translate-x-2',
      sm: 'checked:before:translate-x-[6px]',
    }
    const color = {
      active: 'before:bg-white',
      disabled: 'before:bg-[#D0D5DD]',
    }
    if (disabled) return `${sizes[variant]} ${color.disabled}`
    return `${sizes[variant]} before:transition-transform ${animation[variant]} ${color.active}`
  }, [variant, disabled])

  const size = useMemo(() => {
    const options = {
      lg: 'h-[11px] w-5',
      md: 'h-2 w-4',
      sm: 'h-[6px] w-3',
    }
    return options[variant]
  }, [variant])
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
        size,
        backgroundColor,
        innerCircle,
      )}
      disabled={disabled}
      {...rest}
    />
  )
}
