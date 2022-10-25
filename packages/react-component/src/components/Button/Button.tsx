import { ButtonHTMLAttributes, CSSProperties } from 'react'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { Size } from 'src/types'

import { ButtonVariant } from './types'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  labelStyle?: CSSProperties
  size?: Size
  fullWidth?: boolean
  variant?: ButtonVariant
  icon?: JSX.Element
}

export const Button = ({
  variant = 'contained',
  fullWidth = false,
  labelStyle = {},
  size = 'md',
  disabled,
  children,
  icon,
  className,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()

  return (
    <button
      css={[
        {
          appearance: 'none',
          border: 'none',
          borderRadius: theme.rounded.md,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 64,
          padding: theme.spacing.sm,
          cursor: 'pointer',
          height: theme.inputSize[size],
          '&:active': {
            transform: 'translateY(1px)',
          },
        },
        variant === 'contained' && {
          backgroundColor: theme.colors.blue.main,
          '&:hover': {
            backgroundColor: `${theme.colors.blue.main}E6`,
          },
          '&:active': {
            backgroundColor: theme.colors.blue.dark,
          },
        },
        variant === 'outlined' && {
          backgroundColor: theme.colors.white.main,
          border: `solid 1px ${theme.colors.blue.main}`,
          '&:hover': {
            backgroundColor: theme.colors.blue.lighter,
          },
          '&:active': {
            backgroundColor: theme.colors.white.main,
          },
        },
        variant === 'danger' && {
          backgroundColor: theme.colors.red.main,
          '&:hover': {
            backgroundColor: `${theme.colors.red.main}E6`,
          },
          '&:active': {
            backgroundColor: theme.colors.red.dark,
          },
        },
        disabled && {
          backgroundColor: theme.colors.white.darker,
          cursor: 'not-allowed',
          '&:active': {
            transform: 'none',
          },
          '&:hover': {
            backgroundColor: theme.colors.white.darker,
          },
        },
        fullWidth && { width: '100%' },
      ]}
      disabled={disabled}
      className={className}
      {...rest}
    >
      {icon && (
        <span
          css={{
            display: 'inline-flex',
            marginRight: '4px',
            filter: disabled ? 'brightness(1000%)' : 'none',
          }}
        >
          {icon}
        </span>
      )}

      <Typography
        css={[
          {
            color: variant === 'outlined' ? theme.colors.blue.main : theme.colors.white.main,
            ...labelStyle,
          },
          disabled && { color: theme.colors.gray.main },
        ]}
        type={size === 'lg' ? 'body3' : 'caption1'}
      >
        {children}
      </Typography>
    </button>
  )
}
