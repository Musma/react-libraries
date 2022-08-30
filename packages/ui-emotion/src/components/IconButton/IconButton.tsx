import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { useMemo, ButtonHTMLAttributes } from 'react'

import { Size } from 'src/styles/theme'
import XlsContainedIcon from 'src/components/IconButton/images/xls.svg'
import XlsDisabledIcon from 'src/components/IconButton/images/xls_disabled.svg'
import XlsOutlinedIcon from 'src/components/IconButton/images/xls_outlined.svg'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outlined' | 'contained'
  disabled?: boolean
  size?: Size
  iconSrc?: string
  className?: string
}

export const IconButton = ({
  variant = 'contained',
  disabled = false,
  size = 'lg',
  iconSrc,
  ...rest
}: IconButtonProps) => {
  const theme = useTheme()

  const buttonCss = useMemo(() => {
    return {
      base: css({
        cursor: 'pointer',
        borderRadius: '4px',
        padding: '8px',
        border: 0,
        lineHeight: 1,
      }),
      variants: {
        outlined: css({
          border: `1px solid ${theme.color.green.main}`,
          backgroundColor: theme.color.white.main,
        }),
        contained: css({
          backgroundColor: theme.color.green.main,
        }),
      },
      disabled: css({ backgroundColor: theme.color.white.lighter }),
      size: {
        lg: css({ width: '32px', height: '32px' }),
        md: css({ width: '28px', height: '28px' }),
        sm: css({ width: '24px', height: '24px' }),
      },
    }
  }, [theme])

  const icon = useMemo(() => {
    if (disabled) return XlsDisabledIcon
    if (variant === 'outlined') return XlsOutlinedIcon
    if (variant === 'contained') return XlsContainedIcon
    return XlsContainedIcon
  }, [variant, disabled])

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
      <img src={iconSrc || icon} alt="icon" />
    </button>
  )
}
