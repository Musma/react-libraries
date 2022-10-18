import { PropsWithChildren, useMemo } from 'react'

import { Typography } from 'src/components'

interface BadgeProps {
  value: number
}

export const Badge = ({ value, children }: PropsWithChildren<BadgeProps>) => {
  const computedValue = useMemo(() => {
    return value > 99 ? `99+` : value
  }, [value])

  return (
    <div css={{ position: 'relative', display: 'inline-flex' }}>
      {computedValue !== 0 && (
        <span
          css={(theme) => ({
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
          })}
        >
          <Typography type="caption2" css={(theme) => ({ color: theme.color.white.main })}>
            {computedValue}
          </Typography>
        </span>
      )}

      {children}
    </div>
  )
}
