import { ButtonHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { ButtonBase } from 'src/elements'
import { Size } from 'src/types'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outlined' | 'contained'
  color?: string
  size?: Size
}

export const IconButton = ({
  variant = 'contained',
  color,
  size = 'md',
  ...rest
}: IconButtonProps) => {
  const theme = useTheme()

  return (
    <ButtonBase
      css={[
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 'auto',
          width: theme.inputSize.height[size],
          height: theme.inputSize.height[size],
          borderRadius: theme.rounded.md,
          '&:disabled': {
            backgroundColor: theme.colors.white.lighter,
            cursor: 'not-allowed',
          },
        },
        variant === 'contained' && {
          backgroundColor: color || theme.colors.green.main,
        },
        variant === 'outlined' && {
          border: `1px solid ${color || theme.colors.green.main}`,
          backgroundColor: theme.colors.white.main,
        },
      ]}
      {...rest}
    />
  )
}
