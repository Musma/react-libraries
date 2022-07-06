import classNames from 'classnames'
import _ from 'lodash'
import { InputHTMLAttributes, useMemo } from 'react'

import DoneDisabledLgIcon from './images/done_disabled_lg.svg'
import DoneDisabledMdIcon from './images/done_disabled_md.svg'
import DoneDisabledSmIcon from './images/done_disabled_sm.svg'
import DoneLgIcon from './images/done_lg.svg'
import DoneMdIcon from './images/done_md.svg'
import DoneSmIcon from './images/done_sm.svg'

type Size = 'lg' | 'md' | 'sm'
interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  labelClassName?: string
  size?: Size
}

export const Checkbox = ({ label, labelClassName, size = 'lg', disabled, ...rest }: Props) => {
  const id = _.uniqueId()
  const width = useMemo(() => {
    const sizeOption = {
      lg: 'w-5 h-5',
      md: 'w-[14px] h-[14px]',
      sm: 'w-[10px] h-[10px]',
    }
    return sizeOption[size]
  }, [size])
  const icon = useMemo(() => {
    const iconOption = {
      lg: DoneLgIcon,
      md: DoneMdIcon,
      sm: DoneSmIcon,
    }
    return iconOption[size]
  }, [size])
  const disabledIcon = useMemo(() => {
    const iconOption = {
      lg: DoneDisabledLgIcon,
      md: DoneDisabledMdIcon,
      sm: DoneDisabledSmIcon,
    }
    return iconOption[size]
  }, [size])
  const position = useMemo(() => {
    const positionOption = {
      lg: 'top-[18px] left-[18px]',
      md: 'top-[17px] left-[17px]',
      sm: 'top-[17px] left-[17px]',
    }
    return positionOption[size]
  }, [size])
  return (
    <label htmlFor={id} className="flex">
      <input
        id={id}
        type="checkbox"
        className={classNames(
          'peer relative cursor-pointer appearance-none rounded-[3px]',
          {
            ['border border-[#BAC7D5] checked:border-0 checked:bg-[#107C41]']: !disabled,
          },
          {
            'bg-[#F9FAFB]': disabled,
          },
          width,
        )}
        {...rest}
      />
      <img
        src={disabled ? disabledIcon : icon}
        className={classNames('absolute cursor-pointer', position, {
          ['invisible peer-checked:visible']: !disabled,
        })}
      />
      <span className={`ml-[2px] ${labelClassName}`}>{label}</span>
    </label>
  )
}
