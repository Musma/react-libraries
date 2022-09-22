import { useMemo } from 'react'

import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { Size } from 'src/styles'

interface SpinnerProps {
  size?: Size
}

export const Spinner = ({ size = 'md' }: SpinnerProps) => {
  const theme = useTheme()
  const svgSize = useMemo(() => {
    const svgSize = size === 'sm' ? 16 : size === 'md' ? 32 : 40
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
      className={css({
        '@keyframes spin': {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        animation: 'spin 1s linear infinite',
      })}
      {...svgSize}
    >
      <circle
        cx={8}
        cy={8}
        r={7}
        strokeWidth={2}
        className={css({ stroke: theme.color.gray.main })}
      />
      <path
        d="M8 0a1 1 0 0 0 0 2 6 6 0 1 1-6 6 1 1 0 1 0-2 0 8 8 0 1 0 8-8Z"
        className={css({ fill: theme.color.blue.light })}
      />
    </svg>
  )
}
