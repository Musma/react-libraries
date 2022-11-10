import { useTheme } from '@emotion/react'

import { Span } from 'src/elements'

interface IndicatorProps {
  width: number
  left: number
}

export const Indicator = ({ width, left }: IndicatorProps) => {
  const theme = useTheme()
  return (
    <Span
      css={{
        width: width,
        bottom: -1,
        height: 2,
        backgroundColor: theme.colors.primary.main,
        position: 'absolute',
        left: left,
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      }}
    />
  )
}
