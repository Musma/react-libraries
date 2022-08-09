import classNames from 'classnames'
import { ButtonHTMLAttributes, useCallback, useMemo } from 'react'
import { Size } from 'src/types'

import { Typography } from '../Typography'
import { ReactComponent as ButtonIcon } from './images/buttonIcon.svg'
import { ReactComponent as LgButtonIcon } from './images/buttonIcon_lg.svg'

type Variant = 'outlined' | 'contained' | 'danger'
interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  label: string
  size?: Size | 'xs'
  buttonClassName?: string
  contentClassName?: string
  variant?: Variant
  disabled?: boolean
  //FIXME: 아이콘 디자인 완료시 수정
  showIcon?: boolean
}

export const Button = ({
  label,
  size = 'lg',
  buttonClassName = '',
  contentClassName = '',
  variant = 'contained',
  disabled = false,
  showIcon = false,
  ...rest
}: ButtonProps) => {
  const height = useMemo(() => {
    const sizeOption = {
      lg: 'h-8',
      md: 'h-7',
      sm: 'h-[26px]',
      xs: 'h-6',
    }
    return sizeOption[size]
  }, [size])

  const variantStyle = useMemo(() => {
    const styles = {
      outlined: 'bg-white-main border border-[#036DB7] active:bg-white-main hover:bg-[#F2F8FB]',
      contained: 'bg-[#036DB7] active:bg-[#025A96] hover:bg-[#036DB7]/90',
      danger: 'bg-[#CA3C3D] active:bg-[#A63033] hover:bg-[#CA3C3D]/90',
    }
    return `active:shadow-[inset_-1px_2px_2px_rgba(0,0,0,0.25)] ${styles[variant]}`
  }, [variant])

  const onDisabled = useMemo(() => {
    return 'bg-[#F4F6F9] cursor-not-allowed'
  }, [])

  const contentStyle = useMemo(() => {
    if (disabled) return 'text-[#D0D5DD]'
    if (variant === 'outlined') return 'text-[#036DB7]'
    return 'text-white-main'
  }, [variant, disabled])

  const fill = useMemo(() => {
    if (disabled) return '#D0D5DD'
    if (variant === 'outlined') return '#036DB7'
    return 'white'
  }, [variant, disabled])

  const getLabel = useCallback(
    ({ label, className }: { label: string; className: string }) => {
      if (size === 'lg') {
        return (
          <Typography type="body" variant="body3" className={className}>
            {label}
          </Typography>
        )
      }
      return (
        <Typography type="caption" className={className}>
          {label}
        </Typography>
      )
    },
    [size],
  )
  return (
    <button
      className={classNames(
        'flex items-center justify-center gap-x-[2px] rounded-md',
        height,
        { [variantStyle]: !disabled },
        { [onDisabled]: disabled },
        buttonClassName,
      )}
      {...rest}
      disabled={disabled}
    >
      {showIcon && (size === 'lg' ? <LgButtonIcon fill={fill} /> : <ButtonIcon fill={fill} />)}
      {getLabel({
        label,
        className: classNames('flex items-center justify-center', contentStyle, contentClassName),
      })}
    </button>
  )
}
