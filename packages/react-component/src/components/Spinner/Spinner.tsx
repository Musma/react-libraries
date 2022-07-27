import { useMemo } from 'react'

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large'
}

export const Spinner = ({ size = 'medium' }: SpinnerProps) => {
  const svgSize = useMemo(() => {
    const svgSize = size === 'small' ? 16 : size === 'medium' ? 32 : 40
    return {
      width: svgSize,
      height: svgSize,
    }
  }, [size])
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
      {...svgSize}
    >
      <circle
        cx={8}
        cy={8}
        r={7}
        strokeWidth={2}
        className="stroke-[#D0D5DD] dark:stroke-[#475467]"
      />
      <path
        d="M8 0a1 1 0 0 0 0 2 6 6 0 1 1-6 6 1 1 0 1 0-2 0 8 8 0 1 0 8-8Z"
        className="fill-[#118EE5] dark:fill-[#036DB7]"
      />
    </svg>
  )
}
