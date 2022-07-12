import classNames from 'classnames'
import _ from 'lodash-es'
import { InputHTMLAttributes, useMemo } from 'react'

import DoneDisabledLgIcon from './images/done_disabled_lg.svg'
import DoneDisabledMdIcon from './images/done_disabled_md.svg'
import DoneDisabledSmIcon from './images/done_disabled_sm.svg'
import DoneLgIcon from './images/done_lg.svg'
import DoneMdIcon from './images/done_md.svg'
import DoneSmIcon from './images/done_sm.svg'

import { Size } from 'src/types'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  labelClassName?: string
  size?: Extract<Size, 'sm' | 'md' | 'lg'>
}

export const Checkbox = ({
  id = _.uniqueId(),
  label,
  labelClassName,
  size = 'lg',
  disabled,
  ...rest
}: CheckboxProps) => {
  const height = useMemo(() => {
    const options = {
      lg: 'h-5',
      md: 'h-[14px]',
      sm: 'h-[10px]',
    }
    return options[size]
  }, [size])

  const inputVariant = useMemo(() => {
    const options = {
      lg: 'w-5 rounded-[3px]',
      md: 'w-[14px] rounded-[2px]',
      sm: 'w-[10px] rounded-[2px]',
    }
    return options[size]
  }, [size])

  const activeIcon = useMemo(() => {
    const options = {
      lg: DoneLgIcon,
      md: DoneMdIcon,
      sm: DoneSmIcon,
    }
    return options[size]
  }, [size])

  const disabledIcon = useMemo(() => {
    const options = {
      lg: DoneDisabledLgIcon,
      md: DoneDisabledMdIcon,
      sm: DoneDisabledSmIcon,
    }
    return options[size]
  }, [size])

  const iconPosition = useMemo(() => {
    const options = {
      lg: 'top-[2px] left-[2px]',
      md: 'top-[1px] left-[1px]',
      sm: 'top-[1px] left-[1px]',
    }
    return options[size]
  }, [size])

  const labelFont = useMemo(() => {
    const options = {
      lg: 'leading-5',
      md: 'text-[14px] leading-[14px]',
      sm: 'text-[10px] leading-[10px]',
    }
    return options[size]
  }, [size])

  return (
    <label htmlFor={id} className="relative flex items-center">
      <input
        id={id}
        type="checkbox"
        className={classNames(
          'peer cursor-pointer appearance-none',
          height,
          inputVariant,
          {
            ['border border-[#BAC7D5] checked:border-0 checked:bg-[#107C41]']: !disabled,
          },
          {
            'bg-[#F9FAFB]': disabled,
          },
        )}
        disabled={disabled}
        {...rest}
      />
      <img
        src={disabled ? disabledIcon : activeIcon}
        className={classNames('absolute cursor-pointer', iconPosition, {
          ['invisible peer-checked:visible']: !disabled,
        })}
      />
      <span className={classNames('ml-1', height, labelFont, labelClassName)}>{label}</span>
    </label>
  )
}
