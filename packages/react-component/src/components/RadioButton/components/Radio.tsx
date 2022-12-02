import { useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Size } from 'src/types'

interface RadioProps {
  size?: Size
  checked?: boolean
  disabled?: boolean
}

export const Radio = ({ size = 'md', checked = false, disabled = false }: RadioProps) => {
  const theme = useTheme()

  const radioSize = useMemo(() => {
    return {
      sm: {
        width: 14,
        height: 14,
      },
      md: {
        width: 16,
        height: 16,
      },
      lg: {
        width: 24,
        height: 24,
      },
    }[size]
  }, [size])

  const circleColor = useMemo(() => {
    if (disabled) {
      return theme.colors.gray.main
    }

    if (checked) {
      return theme.colors.green.main
    }

    return theme.colors.gray.darker
  }, [checked, disabled])

  const outterCircle = useMemo(() => {
    return {
      sm: {
        cx: 7,
        cy: 7,
        r: 5.5,
      },
      md: {
        cx: 8,
        cy: 8,
        r: 6.5,
      },
      lg: {
        cx: 12,
        cy: 12,
        r: 10,
      },
    }[size]
  }, [size])

  const innerCircle = useMemo(() => {
    return {
      sm: {
        cx: 7,
        cy: 7,
        r: 3.375,
      },
      md: {
        cx: 8,
        cy: 8,
        r: 3.9375,
      },
      lg: {
        cx: 12,
        cy: 12,
        r: 5.90625,
      },
    }[size]
  }, [size])

  return (
    <svg {...radioSize}>
      <circle {...outterCircle} fill={theme.colors.white.main} stroke={circleColor} />

      {(checked || disabled) && <circle {...innerCircle} fill={circleColor} />}
    </svg>
  )
}
