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
        <span
          css={{
            position: 'absolute',
            top: -3.5,
            left: 12,
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '14px',
            minWidth: '14px',
            padding: '0 4.5px',
            borderRadius: '12px',
            backgroundColor: theme.colors.red.light,
          }}
        >
          <Typography type="caption2" css={{ color: theme.colors.white.main }}>
            {computedValue}
          </Typography>
        </span>
      )}

      {children}
    </Box>
  )
}
