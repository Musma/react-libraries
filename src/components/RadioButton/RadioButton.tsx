import classNames from 'classnames'
import _ from 'lodash'
import { useMemo } from 'react'

export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  size?: 'lg' | 'md' | 'sm'
  labelClassName?: string
  disabled?: boolean
}

export const RadioButton = ({
  label,
  size = 'lg',
  labelClassName = '',
  disabled = false,
  ...rest
}: Props) => {
  const id = _.uniqueId()

  const height = useMemo(() => {
    const options = {
      lg: 'h-5',
      md: 'h-[13px]',
      sm: 'h-[10px]',
    }
    return options[size]
  }, [size])

  const width = useMemo(() => {
    const options = {
      lg: 'w-5',
      md: 'w-[13px]',
      sm: 'w-[10px]',
    }
    return options[size]
  }, [size])

  const textSize = useMemo(() => {
    const options = {
      lg: 'leading-5',
      md: 'text-[13px] leading-[13px]',
      sm: 'text-[10px] leading-[10px]',
    }
    return options[size]
  }, [size])

  const innerCircle = useMemo(() => {
    const common = 'before:m-auto before:block before:rounded-full before:content-[""]'
    const sizes = {
      lg: 'before:h-[11.25px] before:w-[11.25px] before:m-[20%]',
      md: 'before:h-[7.31px] before:w-[7.31px] before:my-[18%]',
      sm: 'before:h-[5.62px] before:w-[5.62px] before:my-[15%]',
    }
    const state = {
      disabled: 'border-[#D0D5DD] before:bg-[#D0D5DD]',
      active: 'border-[#BAC7D5] checked:border-[#107C41] checked:before:bg-[#107C41]',
    }
    return `${common} ${sizes[size]} ${disabled ? state.disabled : state.active}`
  }, [size, disabled])

  return (
    <div className="flex items-center">
      <input
        id={id}
        type="radio"
        className={classNames(
          'cursor-pointer appearance-none rounded-full border',
          height,
          width,
          innerCircle,
        )}
        disabled={disabled}
        {...rest}
      />
      <label htmlFor={id} className={classNames('ml-1', height, textSize, labelClassName)}>
        {label}
      </label>
    </div>
  )
}
