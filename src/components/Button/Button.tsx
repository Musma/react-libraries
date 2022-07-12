import classNames from 'classnames'
import { ButtonHTMLAttributes, useMemo } from 'react'

import { Paragraph } from 'src/components'
import { Size } from 'src/types'

type Variant = 'outlined' | 'contained' | 'danger'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  size?: Size
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
  const width = useMemo(() => {
    const sizeOption = {
      lg: 'w-[200px]',
      md: 'w-[144px]',
      sm: 'w-[92px]',
      xs: 'w-[52px]',
      full: 'w-full',
    }
    return sizeOption[size]
  }, [size])

  const variantStyle = useMemo(() => {
    const styles = {
      outlined: 'bg-white border border-[#036DB7] active:bg-white hover:bg-[#F2F8FB]',
      contained: 'bg-[#036DB7] active:bg-[#025A96] hover:bg-[#036DB7]/90',
      danger: 'bg-[#CA3C3D] active:bg-[#A63033] hover:bg-[#CA3C3D]/90',
    }
    return `active:shadow-[inset_-1px_2px_2px_rgba(0,0,0,0.25)] ${styles[variant]}`
  }, [variant])

  const onDisabled = useMemo(() => {
    return 'bg-[#F9FAFB] cursor-not-allowed'
  }, [])

  const contentStyle = useMemo(() => {
    if (disabled) return 'text-[#D0D5DD]'
    if (variant === 'outlined') return 'text-[#036DB7]'
    return 'text-white'
  }, [variant, disabled])
  const fill = useMemo(() => {
    if (disabled) return '#D0D5DD'
    if (variant === 'outlined') return '#036DB7'
    return 'white'
  }, [variant, disabled])

  return (
    <button
      className={classNames(
        'h-[34px] rounded-md',
        width,
        { [variantStyle]: !disabled },
        { [onDisabled]: disabled },
        buttonClassName,
      )}
      {...rest}
      disabled={disabled}
    >
      <Paragraph
        element={'p3'}
        className={classNames('flex items-center justify-center', contentStyle, contentClassName)}
      >
        {showIcon && (
          // FIXME: ReactComponent로 import가 되지 않아 임시로 svg 소스코드 그대로 사용
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.82402 11.9961H1.99121V9.1633L9.6257 1.52882C9.7509 1.40366 9.92068 1.33334 10.0977 1.33334C10.2748 1.33334 10.4445 1.40366 10.5697 1.52882L12.4585 3.41758C12.5837 3.54278 12.654 3.71257 12.654 3.8896C12.654 4.06664 12.5837 4.23642 12.4585 4.36162L4.82402 11.9961ZM1.99121 13.3314H14.0088V14.6667H1.99121V13.3314Z"
              fill={fill}
            />
          </svg>
        )}
        {label}
      </Paragraph>
    </button>
  )
}
