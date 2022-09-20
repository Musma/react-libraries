import { ReactNode } from 'react'

import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { Size } from 'src/styles/theme'

interface IconAdornmentProps {
  children: ReactNode
  size?: Size
  className?: string
  handleIconClick?: () => void
}

export const IconAdornment = ({
  children,
  handleIconClick,
  size = 'lg',
  className,
}: IconAdornmentProps) => {
  const theme = useTheme()
  return (
    <button
      onClick={handleIconClick}
      className={cx(
        containerCss.base,
        containerCss.size[size],
        css({ '&:hover': { backgroundColor: theme.color.gray.light } }),
        className,
      )}
    >
      {children}
    </button>
  )
}

const containerCss = {
  base: css({
    all: 'unset',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:active': {
      transform: 'translateY(1px)',
    },
    borderRadius: '9999px',
  }),
  size: {
    lg: css({ width: '32px', height: '32px' }),
    md: css({ width: '28px', height: '28px' }),
    sm: css({ width: '24px', height: '24px' }),
  },
}
