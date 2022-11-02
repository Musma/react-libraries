import { ButtonHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'
import { convertHexToRGB } from '@musma/react-utils'

import { Typography } from 'src/components'
import { ButtonBase } from 'src/elements'
import { Size } from 'src/types'

import { ButtonVariant } from './types'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  children,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()

  return (
    <ButtonBase
      css={[
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: theme.inputSize[size],
          borderRadius: theme.rounded.md,
          padding: theme.spacing.sm,
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
            backgroundColor: theme.colors.white.lighter,
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
    </ButtonBase>
  )
}
