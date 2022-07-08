import classNames from 'classnames'
import _ from 'lodash'
import { useMemo } from 'react'

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  labelClassName?: string
  disabled?: boolean
}

export const RadioButton = ({
  id = _.uniqueId(),
  label,
  size = 'lg',
  labelClassName = '',
  disabled = false,
  ...rest
}: Props) => {
  const height = useMemo(() => {
    const options = {
      lg: 'h-5',
      md: 'h-[13px]',
      sm: 'h-[10px]',
    }
    return options[size]
  }, [size])

  const outerCircle = useMemo(() => {
    const width = {
      lg: 'w-5',
      md: 'w-[13px]',
      sm: 'w-[10px]',
    }
    const borderColor = {
      checked: 'border-[#107C41]',
      notChecked: 'border-[#BAC7D5]',
      disabled: 'border-[#D0D5DD]',
    }
    if (disabled) return `${width[size]} ${borderColor.disabled}`
    return `${width[size]} ${borderColor.notChecked} checked:${borderColor.checked}`
  }, [size, disabled])

  const innerCircle = useMemo(() => {
    const layout = {
      lg: 'h-[11.25px] w-[11.25px] left-[4.375px] top-[4.375px]',
      md: 'h-[7.31px] w-[7.31px] left-[2.845px] top-[2.845px]',
      sm: 'h-[5.62px] w-[5.62px] left-[2.19px] top-[2.19px]',
    }
    const borderColor = {
      disabled: 'border-[#D0D5DD] bg-[#D0D5DD]',
      active: 'border-[#BAC7D5] peer-checked:border-[#107C41] peer-checked:bg-[#107C41]',
    }
    return `${layout[size]} ${disabled ? borderColor.disabled : borderColor.active}`
  }, [size, disabled])

  const labelFont = useMemo(() => {
    const fontStyle = {
      lg: 'leading-5',
      md: 'text-[13px] leading-[13px]',
      sm: 'text-[10px] leading-[10px]',
    }
    return fontStyle[size]
  }, [size])

  return (
    <label htmlFor={id} className="relative flex items-center">
      <input
        id={id}
        type="radio"
        className={classNames(
          'peer cursor-pointer appearance-none rounded-full border',
          height,
          outerCircle,
        )}
        disabled={disabled}
        {...rest}
      />
      <div className={classNames('absolute rounded-full', innerCircle)} />
      <span className={classNames('ml-1', height, labelFont, labelClassName)}>{label}</span>
    </label>
  )
}
