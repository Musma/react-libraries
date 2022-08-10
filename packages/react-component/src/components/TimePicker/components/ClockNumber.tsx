import classNames from 'classnames'
import { Typography } from 'src/components/Typography'

interface ClockNumberProps {
  label: string
  position: {
    x: number
    y: number
  }
  isSelected: boolean
}

export const ClockNumber = ({ label, position, isSelected }: ClockNumberProps) => {
  return (
    <div
      className={classNames(
        `pointer-events-none absolute left-full flex h-4 w-4 select-none items-center justify-center rounded-full`,
      )}
      style={{
        left: 'calc((100% - 16px) / 2)',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <Typography type="caption" variant={'caption2'} color={isSelected ? '#FFFFFF' : ''}>
        {label}
      </Typography>
    </div>
  )
}
