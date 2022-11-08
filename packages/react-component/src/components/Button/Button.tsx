import { ButtonHTMLAttributes, SVGProps } from 'react'

import { useTheme } from '@emotion/react'
import { convertHexToRGB } from '@musma/react-utils'

import { InputIcon, Typography } from 'src/components'
import { ButtonBase } from 'src/elements'
import { Size } from 'src/types'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   *
   */
  size?: Size
  /**
   * @default false
   */
  fullWidth?: boolean
  /**
   * @default contained
   */
  variant?: 'outlined' | 'contained' | 'danger'
  /**
   *
   */
  startIcon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

/**
 *
 * @param param0
 * @returns
 */
export const Button = ({
  variant = 'contained',
  fullWidth = false,
  size = 'md',
  disabled,
  startIcon,
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
      {startIcon && (
        <InputIcon
          icon={startIcon}
          size={size}
          color={
            disabled
              ? theme.colors.gray.main
              : variant === 'outlined'
              ? theme.colors.primary.main
              : theme.colors.white.main
          }
          css={{ marginRight: 4 }}
        />
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
