import { PropsWithChildren, useMemo } from 'react'

import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'

const badgeCss = {
  container: css({
    position: 'relative',
    display: 'inline-flex',
  }),
  countWrapper: css({
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
  }),
}
interface BadgeProps {
  count: number
}

export const Badge = ({ count, children }: PropsWithChildren<BadgeProps>) => {
  const theme = useTheme()
  const countNumber = useMemo(() => {
    return count > 99 ? `99+` : count
  }, [count])

  return (
    <div className={badgeCss.container}>
      {children}
      {countNumber !== 0 && (
        <span
          className={cx(badgeCss.countWrapper, css({ backgroundColor: theme.color.red.light }))}
        >
          <Typography
            type="caption"
            variant="caption2"
            className={css({ color: theme.color.white.main })}
          >
            {countNumber}
          </Typography>
        </span>
      )}
    </div>
  )
}
