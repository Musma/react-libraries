import classNames from 'classnames'
import { useMemo } from 'react'

import { ReactComponent as CloseIcon } from './images/close.svg'

interface Props {
  closable?: boolean
  size?: 'sm' | 'md'
  color?: 'light' | 'dark'
  variant?: 'rectangle' | 'stadium'
  label: string
  containerClassName?: string
  labelClassName?: string
}

export const Tag = ({
  closable = true,
  size = 'md',
  color = 'light',
  variant = 'stadium',
  label,
  containerClassName = '',
  labelClassName = '',
}: Props) => {
  const shape = useMemo(() => {
    const border = {
      rectangle: 'rounded-sm',
      stadium: 'rounded-[100px] border',
    }
    const padding = {
      md: 'px-2 py-1',
      sm: 'px-1 py-[2px]',
    }
    const height = {
      md: 'h-6',
      sm: 'h-[18px]',
    }
    return `${border[variant]} ${padding[size]} ${height[size]}`
  }, [variant, size])

  const font = useMemo(() => {
    const options = {
      sm: 'text-[10px] leading-[14px]',
      md: 'text-xs',
    }
    return options[size]
  }, [size])

  const colorTheme = useMemo(() => {
    const options = {
      light: 'bg-[#F9FAFB] text-[#242E40] border-[#BAC7D5]',
      dark: 'bg-[#0C5E9633] text-[#036DB7] border-[#036DB7]',
    }
    return options[color]
  }, [color])

  return (
    <div className={classNames('inline-flex items-center', colorTheme, shape, containerClassName)}>
      <span className={classNames(font, labelClassName)}>{label}</span>
      {closable && <CloseIcon className="ml-1" fill={color === 'light' ? '#242E40' : '#036DB7'} />}
    </div>
  )
}
