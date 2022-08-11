import classNames from 'classnames'
import { useMemo } from 'react'
import { Size } from 'src/types'
import { Typography } from '../Typography'

import { ReactComponent as CloseIcon } from './images/close.svg'

interface TagProps {
  /**
   * onClose를 사용할 경우, useTags 훅과 함께 사용하세요
   */
  onClose?: (label: string) => void
  size?: Size
  color?: 'white' | 'blue'
  variant?: 'rectangle' | 'stadium'
  label: string
  className?: string
}

export const Tag = ({
  onClose,
  size = 'md',
  color = 'white',
  variant = 'stadium',
  label,
  className = '',
}: TagProps) => {
  const shape = useMemo(() => {
    const border = {
      rectangle: 'rounded-sm',
      stadium: 'rounded-[100px] border',
    }
    const padding = {
      sm: 'px-[2px]',
      md: 'px-1 py-[2px]',
      lg: 'px-2 py-1',
    }
    const height = {
      sm: 'h-[14px]',
      md: 'h-[18px]',
      lg: 'h-6',
    }
    return `${border[variant]} ${padding[size]} ${height[size]}`
  }, [variant, size])

  const colorTheme = useMemo(() => {
    const options = {
      white: 'bg-[#F9FAFB] text-[#242E40] border-[#BAC7D5]',
      blue: 'bg-[#0C5E9633] text-[#036DB7] border-[#036DB7]',
    }
    return options[color]
  }, [color])

  return (
    <div
      className={classNames(
        'inline-flex items-center justify-center',
        colorTheme,
        shape,
        className,
      )}
    >
      <Typography
        type="caption"
        variant={size === 'lg' ? 'caption1' : 'caption2'}
        color={color === 'white' ? '#242E40' : '#036DB7'}
      >
        {label}
      </Typography>
      {onClose && (
        <CloseIcon
          onClick={() => onClose(label)}
          className="ml-1 cursor-pointer"
          fill={color === 'white' ? '#242E40' : '#036DB7'}
        />
      )}
    </div>
  )
}
