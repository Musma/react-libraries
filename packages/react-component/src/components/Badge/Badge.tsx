import { ReactNode, useMemo } from 'react'

interface BadgeProps {
  badgeCount: number
  children?: ReactNode
}

export const Badge = ({ badgeCount, children }: BadgeProps) => {
  const content = useMemo(() => {
    if (badgeCount > 99) {
      return `${99}+`
    }
    return badgeCount
  }, [badgeCount])

  return (
    <div className="relative inline-flex">
      {children}
      <span
        className="absolute top-0 right-0 z-[1] flex h-[20px] min-w-[20px] place-content-center items-center rounded-xl bg-[#FF4D4F] p-[6px] text-[10px] text-white"
        style={{
          transform: 'scale(1) translate(50%, -50%)',
          transformOrigin: '100% 0%',
          transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }}
      >
        {content}
      </span>
    </div>
  )
}
