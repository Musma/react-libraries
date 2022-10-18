import { ButtonHTMLAttributes, CSSProperties, useMemo } from 'react'

import { css as pluginCss } from '@emotion/css'
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

  const buttonCss = useMemo(() => {
    if (disabled) {
      return pluginCss({
        backgroundColor: theme.color.white.lighter,
        cursor: 'not-allowed',
        '&:active': {
          boxShadow: 'none',
          transform: 'none',
        },
      })
    }
    return {
      outlined: pluginCss({
        backgroundColor: theme.color.white.main,
        border: `solid 1px ${theme.color.blue.main}`,
        '&:hover': {
          backgroundColor: theme.color.blue.lighter,
        },
        '&:active': {
          backgroundColor: theme.color.white.main,
        },
      }),
      contained: pluginCss({
        backgroundColor: theme.color.blue.main,
        '&:hover': {
          backgroundColor: `${theme.color.blue.main}E6`,
        },
        '&:active': {
          backgroundColor: theme.color.blue.dark,
        },
      }),
      danger: pluginCss({
        backgroundColor: theme.color.red.main,
        '&:hover': {
          backgroundColor: `${theme.color.red.main}E6`,
        },
        '&:active': {
          backgroundColor: theme.color.red.dark,
        },
      }),
    }[variant]
  }, [disabled, variant, theme])

  const buttonStyle = useMemo(() => {
    if (disabled) {
      return css({
        backgroundColor: theme.color.white.lighter,
        cursor: 'not-allowed',
        '&:active': {
          boxShadow: 'none',
          transform: 'none',
        },
      })
    }
    return {
      outlined: css({
        backgroundColor: theme.color.white.main,
        border: `solid 1px ${theme.color.blue.main}`,
        '&:hover': {
          backgroundColor: theme.color.blue.lighter,
        },
        '&:active': {
          backgroundColor: theme.color.white.main,
        },
      }),
      contained: css({
        backgroundColor: theme.color.blue.main,
        '&:hover': {
          backgroundColor: `${theme.color.blue.main}E6`,
        },
        '&:active': {
          backgroundColor: theme.color.blue.dark,
        },
      }),
      danger: css({
        backgroundColor: theme.color.red.main,
        '&:hover': {
          backgroundColor: `${theme.color.red.main}E6`,
        },
        '&:active': {
          backgroundColor: theme.color.red.dark,
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
      // className={cx(
      //   pluginCss({
      //     appearance: 'none',
      //     border: 'solid 1px transparent',
      //     borderRadius: 6,
      //     display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     minWidth: 64,
      //     padding: 8,
      //     cursor: 'pointer',
      //     height: {
      //       lg: 32,
      //       md: 28,
      //       sm: 26,
      //       xs: 24,
      //     }[size],
      //     '&:active': {
      //       transform: 'translateY(1px)',
      //     },
      //   }),
      //   { [pluginCss({ width: '100%' })]: fullWidth },
      //   buttonCss,
      //   className,
      // )}
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
        css={(theme) =>
          css({
            color: variant === 'outlined' ? theme.color.blue.main : theme.color.white.main,
            ...labelStyle,
          })
        }
        type={size === 'lg' ? 'body3' : 'caption1'}
      >
        {children}
      </Typography>
    </button>
  )
}
