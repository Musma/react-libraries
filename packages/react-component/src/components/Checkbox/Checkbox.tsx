import classNames from 'classnames'
import _ from 'lodash-es'
import { InputHTMLAttributes, useCallback, useMemo } from 'react'
import { Sizes } from 'src/types'

import { Typography } from '../Typography'
import DoneDisabledLgIcon from './images/done_disabled_lg.svg'
import DoneDisabledMdIcon from './images/done_disabled_md.svg'
import DoneDisabledSmIcon from './images/done_disabled_sm.svg'
import DoneLgIcon from './images/done_lg.svg'
import DoneMdIcon from './images/done_md.svg'
import DoneSmIcon from './images/done_sm.svg'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  labelClassName?: string
  size?: Sizes
}

export const Checkbox = ({
  id = _.uniqueId(),
  label,
  size = 'lg',
  disabled,
  ...rest
}: CheckboxProps) => {
  const height = useMemo(() => {
    const options = {
      lg: 'h-6 w-6',
      md: 'h-4 w-4',
      sm: 'h-[14px] w-[14px]',
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
      lg: 'top-1 left-1',
      md: 'top-[2px] left-[2px]',
      sm: 'top-[3px] left-[3px]',
    }
    return options[size]
  }, [size])

  const container = useMemo(() => {
    return {
      lg: 'w-6 h-6',
      md: 'w-4 h-4',
      sm: 'w-[14px] h-[14px]',
    }[size]
  }, [size])

  const getLabel = useCallback(
    (label: string) => {
      if (size !== 'sm') {
        return (
          <Typography className="ml-2" type="body" variant={size === 'lg' ? 'body2' : 'body3'}>
            {label}
          </Typography>
        )
      }
      return (
        <Typography className="ml-1" type="caption">
          {label}
        </Typography>
      )
    },
    [size],
  )

  return (
    <label htmlFor={id} className="flex items-center">
      <div className={classNames('relative flex items-center justify-center', container)}>
        <input
          id={id}
          type="checkbox"
          className={classNames(
            'peer cursor-pointer appearance-none rounded-[2px]',
            height,
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
      </div>
      {label && getLabel(label)}
    </label>
  )
}
