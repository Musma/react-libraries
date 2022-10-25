import { ButtonHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Size } from 'src/types'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outlined' | 'contained'
  color?: string
  size?: Size
}

export const IconButton = ({
  variant = 'contained',
  color,
  size = 'lg',
  ...rest
}: IconButtonProps) => {
  const theme = useTheme()

  return (
    <button
      css={[
        {
          width: theme.inputSize[size],
          height: theme.inputSize[size],
          cursor: 'pointer',
          borderRadius: '4px',
          appearance: 'none',
          outline: 'none',
          border: 'none',
          lineHeight: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&:active': {
            transform: 'translateY(1px)',
          },
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
