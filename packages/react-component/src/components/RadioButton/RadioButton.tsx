import classNames from 'classnames'
import _ from 'lodash-es'
import { useMemo } from 'react'
import { Size } from 'src/types'

import { Typography } from '../Typography'

interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  size?: Size
  labelClassName?: string
  disabled?: boolean
}

export const RadioButton = ({
  id = _.uniqueId(),
  label,
  size = 'lg',
  disabled = false,
  ...rest
}: RadioButtonProps) => {
  const height = useMemo(() => {
    const options = {
      lg: 'h-[21px]',
      md: 'h-[14px]',
      sm: 'h-[12px]',
    }
    return options[size]
  }, [size])

  const outerCircle = useMemo(() => {
    const width = {
      lg: 'w-[21px]',
      md: 'w-[14px]',
      sm: 'w-[12px]',
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
      lg: 'h-[11.81px] w-[11.81px] left-[6.09px] top-[6.09px]',
      md: 'h-[7.88px] w-[7.88px] left-[4.06px] top-[4.06px]',
      sm: 'h-[6.75px] w-[6.75px] left-[3.62px] top-[3.62px]',
    }
    const borderColor = {
      disabled: 'border-[#D0D5DD] bg-[#D0D5DD]',
      active: 'border-[#BAC7D5] peer-checked:border-[#107C41] peer-checked:bg-[#107C41]',
    }
    return `${layout[size]} ${disabled ? borderColor.disabled : borderColor.active}`
  }, [size, disabled])

  const container = useMemo(() => {
    return {
      lg: 'w-6 h-6',
      md: 'w-4 h-4',
      sm: 'w-[14px] h-[14px]',
    }[size]
  }, [size])

  return (
    <label htmlFor="id" className="flex items-center">
      <div className={classNames('relative flex items-center justify-center', container)}>
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
      </div>
      <Typography>{label}</Typography>
    </label>
  )
}
