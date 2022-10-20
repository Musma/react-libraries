import { ButtonHTMLAttributes, CSSProperties, useMemo } from 'react'

import { css, useTheme } from '@emotion/react'

import { Typography } from 'src/components/Typography'
import { Size } from 'src/types'

import { ButtonVariant } from './types'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  labelStyle?: CSSProperties
  fullWidth?: boolean
  size?: Size | 'xs'
  variant?: ButtonVariant
  icon?: JSX.Element
}

export const Button = ({
  variant = 'contained',
  fullWidth = false,
  labelStyle = {},
  size = 'lg',
  disabled,
  children,
  icon,
  className,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()

  const buttonStyle = useMemo(() => {
    if (disabled) {
      return css({
        backgroundColor: theme.colors.white.lighter,
        cursor: 'not-allowed',
        '&:active': {
          boxShadow: 'none',
          transform: 'none',
        },
      })
    }
    return {
      outlined: css({
        backgroundColor: theme.colors.white.main,
        border: `solid 1px ${theme.colors.blue.main}`,
        '&:hover': {
          backgroundColor: theme.colors.blue.lighter,
        },
        '&:active': {
          backgroundColor: theme.colors.white.main,
        },
      }),
      contained: css({
        backgroundColor: theme.colors.blue.main,
        '&:hover': {
          backgroundColor: `${theme.colors.blue.main}E6`,
        },
        '&:active': {
          backgroundColor: theme.colors.blue.dark,
        },
      }),
      danger: css({
        backgroundColor: theme.colors.red.main,
        '&:hover': {
          backgroundColor: `${theme.colors.red.main}E6`,
        },
        '&:active': {
          backgroundColor: theme.colors.red.dark,
        },
      }),
    }[variant]
  }, [disabled, variant, theme])

  return (
    <button
      disabled={disabled}
      css={[
        {
          appearance: 'none',
          border: 'solid 1px transparent',
          borderRadius: 6,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 64,
          padding: 8,
          cursor: 'pointer',
          height: {
            lg: 32,
            md: 28,
            sm: 26,
            xs: 24,
          }[size],
          '&:active': {
            transform: 'translateY(1px)',
          },
        },
        fullWidth ? { width: '100%' } : {},
        buttonStyle,
      ]}
      className={className}
      {...rest}
    >
      {icon && (
        <span
          css={{
            display: 'inline-flex',
            marginRight: '3px',
            filter: disabled ? 'brightness(1000%)' : 'none',
          }}
        >
          {icon}
        </span>
      )}
      <Typography
        css={{
          color: variant === 'outlined' ? theme.colors.blue.main : theme.colors.white.main,
          ...labelStyle,
        }}
        type={size === 'lg' ? 'body3' : 'caption1'}
      >
        {children}
      </Typography>
    </button>
  )
}
