import { ButtonHTMLAttributes, CSSProperties } from 'react'

import { useTheme } from '@emotion/react'
import { convertHexToRGB } from '@musma/react-utils'

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
  size = 'md',
  disabled,
  icon,
  className,
  children,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()

  return (
    <button
      css={[
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 64,
          height: theme.inputSize[size],
          appearance: 'none',
          border: 'none',
          borderRadius: theme.rounded.md,
          padding: theme.spacing.sm,
          cursor: 'pointer',
          '&:active': {
            transform: 'translateY(1px)',
          },
        },
        variant === 'contained' && {
          backgroundColor: theme.colors.primary.main,
          '&:hover': {
            backgroundColor: convertHexToRGB(theme.colors.primary.main, 0.9),
          },
        },
        variant === 'outlined' && {
          backgroundColor: theme.colors.white.main,
          border: `solid 1px ${theme.colors.primary.main}`,
          '&:hover': {
            backgroundColor: theme.colors.primary.lighter,
          },
        },
        variant === 'danger' && {
          backgroundColor: theme.colors.red.main,
          '&:hover': {
            backgroundColor: convertHexToRGB(theme.colors.red.main, 0.9),
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
            color: variant === 'outlined' ? theme.colors.primary.main : theme.colors.white.main,
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
