import { useMemo, ButtonHTMLAttributes, ReactNode } from 'react'

import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { Size } from 'src/styles/theme'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outlined' | 'contained'
  disabled?: boolean
  color?: string
  size?: Size
  children: ReactNode
  className?: string
}

export const IconButton = ({
  variant = 'contained',
  disabled = false,
  color,
  size = 'lg',
  children,
  ...rest
}: IconButtonProps) => {
  const theme = useTheme()

  const buttonCss = useMemo(() => {
    return {
      base: css({
        cursor: 'pointer',
        borderRadius: '4px',
        border: 0,
        lineHeight: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }),
      variants: {
        outlined: css({
          border: `1px solid ${color || theme.color.green.main}`,
          backgroundColor: theme.color.white.main,
        }),
        contained: css({
          backgroundColor: color || theme.color.green.main,
        }),
      },
      disabled: css({ backgroundColor: theme.color.white.lighter }),
      size: {
        lg: css({ width: '32px', height: '32px' }),
        md: css({ width: '28px', height: '28px' }),
        sm: css({ width: '24px', height: '24px' }),
      },
    }
  }, [color, theme])

  return (
    <button
      {...rest}
      className={cx(
        buttonCss.base,
        buttonCss.size[size],
        buttonCss.variants[variant],
        { [buttonCss.variants[variant]]: !disabled },
        { [buttonCss.disabled]: disabled },
      )}
    >
      {children}
    </button>
  )
}
