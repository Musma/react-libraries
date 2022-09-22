import { PropsWithChildren, useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'

interface BadgeProps {
  count: number
}

export const Badge = ({ count, children }: PropsWithChildren<BadgeProps>) => {
  const theme = useTheme()
  const countNumber = useMemo(() => {
    return count > 99 ? `99+` : count
  }, [count])

  return (
    <div css={{ position: 'relative', display: 'inline-flex' }}>
      {countNumber !== 0 && (
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
            backgroundColor: theme.color.red.light,
          }}
        >
          <Typography type="caption2" css={{ color: theme.color.white.main }}>
            {countNumber}
          </Typography>
        </span>
      )}

      {children}
    </div>
  )
}
