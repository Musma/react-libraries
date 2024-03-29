import { PropsWithChildren, useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { Box } from 'src/elements'

interface BadgeProps {
  value: number
}

export const Badge = ({ value, children }: PropsWithChildren<BadgeProps>) => {
  const theme = useTheme()
  const computedValue = useMemo(() => {
    return value > 99 ? `99+` : value
  }, [value])

  return (
    <Box css={{ position: 'relative', display: 'inline-flex' }}>
      {computedValue !== 0 && (
        <Box
          css={{
            position: 'absolute',
            top: -3.5,
            left: 12,
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 14,
            minWidth: 14,
            padding: '0 4.5px',
            borderRadius: '12px',
            backgroundColor: theme.colors.red.light,
          }}
        >
          <Typography type="caption2" css={{ color: theme.colors.white.main }}>
            {computedValue}
          </Typography>
        </Box>
      )}

      {children}
    </Box>
  )
}
