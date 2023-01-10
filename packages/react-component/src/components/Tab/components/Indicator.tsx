import { useTheme } from '@emotion/react'

import { Span } from 'src/elements'

export const Indicator = () => {
  const theme = useTheme()
  return (
    <Span
      css={{
        width: '100%',
        height: 2,
        bottom: -1,
        backgroundColor: theme.colors.primary.main,
        position: 'absolute',
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      }}
    />
  )
}
