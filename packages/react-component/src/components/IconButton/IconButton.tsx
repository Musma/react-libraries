import classNames from 'classnames'
import { ButtonHTMLAttributes, useMemo } from 'react'
import { Size } from 'src/types'

import XlsContainedIcon from './images/xls.svg'
import XlsDisabledIcon from './images/xls_disabled.svg'
import XlsOutlinedIcon from './images/xls_outlined.svg'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outlined' | 'contained'
  disabled?: boolean
  size?: Size
  iconSrc?: string
}

export const IconButton = ({
  variant = 'contained',
  disabled = false,
  size = 'lg',
  iconSrc,
  ...rest
}: IconButtonProps) => {
  const variantStyle = useMemo(() => {
    const styles = {
      outlined: 'border border-[#107C41] bg-white',
      contained: 'bg-[#107C41]',
    }
    if (!variant) {
      return styles['contained']
    }
    return styles[variant]
  }, [variant])

  const icon = useMemo(() => {
    if (disabled) return XlsDisabledIcon
    if (variant === 'outlined') return XlsOutlinedIcon
    if (variant === 'contained') return XlsContainedIcon
    return XlsContainedIcon
  }, [variant, disabled])

  const sizeStyle = useMemo(() => {
    return {
      lg: 'w-8 h-8',
      md: 'w-7 h-7',
      sm: 'w-6 h-6',
    }[size]
  }, [size])

  return (
    <button
      {...rest}
      className={classNames(
        'cursor-pointer rounded p-2',
        sizeStyle,
        { [variantStyle]: !disabled },
        { 'bg-[#F4F6F9]': disabled },
      )}
    >
      {<img src={iconSrc || icon} alt="xls" />}
    </button>
  )
}
