import classNames from 'classnames'
import { Typography } from 'src/components/Typography'
import { Sizes } from 'src/types'

interface ClockNumberProps {
  size: Sizes
  label: string
  position: {
    x: number
    y: number
  }
  isSelected: boolean
}

export const ClockNumber = ({ size, label, position, isSelected }: ClockNumberProps) => {
  return (
    <div
      className={classNames(
        `pointer-events-none absolute left-full flex select-none items-center justify-center rounded-full`,
        size === 'sm' ? 'h-[14px] w-[14px]' : 'h-[16px] w-[16px]',
        isSelected ? 'text-white' : 'text-[#242E40]',
      )}
      style={{
        left: size === 'sm' ? 'calc((100% - 14px) / 2)' : 'calc((100% - 16px) / 2)',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <Typography type="caption" variant={size === 'sm' ? 'caption2' : 'caption1'}>
        {label}
      </Typography>
    </div>
  )
}
