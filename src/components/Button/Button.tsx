import classNames from 'classnames'
import React from 'react'

import { Body3 } from '../Typography'

type Size = 'L' | 'M' | 'S' | 'XS'
type Variant = 'outlined' | 'contained' | 'danger'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  size?: Size
  buttonClassName?: string
  contentClassName?: string
  variant?: Variant
  disabled?: boolean
  // showIcon?: boolean
}

export const Button = ({
  label,
  size = 'L',
  buttonClassName = '',
  contentClassName = '',
  variant = 'contained',
  disabled = false,
  // showIcon,
  ...rest
}: ButtonProps) => {
  const getSize = React.useCallback(() => {
    const sizeOption = {
      L: 'w-[200px]',
      M: 'w-[144px]',
      S: 'w-[92px]',
      XS: 'w-[52px]',
    }
    return sizeOption[size]
  }, [size])

  const getVariantStyle = React.useCallback(() => {
    const styles = {
      outlined: 'bg-white border border-[#036DB7] active:bg-white hover:bg-[#F2F8FB]',
      contained: 'bg-[#036DB7] active:bg-[#025A96] hover:bg-[#036DB7]/90',
      danger: 'bg-[#CA3C3D] active:bg-[#A63033] hover:bg-[#CA3C3D]/90',
    }
    return `active:shadow-[inset_-1px_2px_2px_rgba(0,0,0,0.25)] ${styles[variant]}`
  }, [variant])

  const getDisabledStyle = React.useCallback(() => {
    return 'bg-[#F9FAFB] cursor-not-allowed'
  }, [])

  const getContentStyle = React.useCallback(() => {
    if (disabled) return 'text-[#D0D5DD]'
    if (variant === 'outlined') return 'text-[#036DB7]'
    return 'text-white'
  }, [variant, disabled])

  return (
    <button
      className={classNames(
        'h-[34px] rounded-md',
        getSize(),
        { [getVariantStyle()]: !disabled },
        { [getDisabledStyle()]: disabled },
        buttonClassName,
      )}
      {...rest}
      disabled={disabled}
    >
      <Body3 className={classNames(getContentStyle(), contentClassName)}>{label}</Body3>
    </button>
  )
}
