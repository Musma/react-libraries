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
    top: 0,
    right: 0,
    zIndex: 1,
    display: 'flex',
    height: '14px',
    minWidth: '14px',
    paddingLeft: '4.5px',
    paddingRight: '4.5px',
    placeContent: 'center',
    alignItems: 'center',
    borderRadius: '12px',
    transform: 'scale(1) translate(50%, -50%)',
    transformOrigin: '100% 0%',
    transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
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
      <span className={cx(badgeCss.countWrapper, css({ backgroundColor: theme.color.red.light }))}>
        <Typography
          type="caption"
          variant="caption2"
          className={css({ color: theme.color.white.main })}
        >
          {countNumber}
        </Typography>
      </span>
    </div>
  )
}
