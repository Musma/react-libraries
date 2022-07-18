import classNames from 'classnames'

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
        `pointer-events-none absolute left-full flex h-[16px] w-[16px] select-none items-center justify-center rounded-full text-[12px] font-normal `,
        isSelected ? 'text-white' : 'text-[#242E40]',
      )}
      style={{
        left: 'calc((100% - 16px) / 2)',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {label}
    </div>
  )
}
