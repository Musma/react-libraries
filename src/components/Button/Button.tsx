import classNames from 'classnames'
import { useCallback } from 'react'

import { Body3 } from 'src/components/Typography'

type Size = 'L' | 'M' | 'S' | 'XS'
type Variant = 'outlined' | 'contained'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  size?: Size
  buttonClassName?: string
  contentClassName?: string
  variant?: Variant
  // showIcon?: boolean
}

export const Button = ({
  label,
  size = 'L',
  buttonClassName,
  contentClassName,
  variant = 'contained',
  // showIcon,
  ...rest
}: ButtonProps) => {
  const getButtonClassName = useCallback(({ variant, size }: { variant: Variant; size: Size }) => {
    const sizeOption = {
      L: 'w-[200px]',
      M: 'w-[144px]',
      S: 'w-[92px]',
      XS: 'w-[52px]',
    }
    const variantOption = {
      outlined: `bg-white border border-[#036DB7] active:bg-white hover:bg-[#F2F8FB]`,
      contained: `bg-[#036DB7] active:bg-[#025A96] hover:bg-[#036DB7]/90`,
    }
    return `${sizeOption[size]} ${variantOption[variant]}`
  }, [])
  const getContentClassName = useCallback((variant: Variant) => {
    return variant === 'contained' ? 'text-white' : 'text-[#036DB7]'
  }, [])
  return (
    <button
      className={classNames(
        `h-[34px] rounded-md active:shadow-[inset_-1px_2px_2px_rgba(0,0,0,0.25)] ${buttonClassName}`,
        getButtonClassName({ variant, size }),
      )}
      {...rest}
    >
      <Body3 className={getContentClassName(variant)}>{label}</Body3>
    </button>
  )
}
