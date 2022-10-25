import { ButtonHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

interface IconAdornmentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  noPadding?: boolean
}

export const IconAdornment = ({ noPadding = false, ...rest }: IconAdornmentProps) => {
  const theme = useTheme()
  return (
    <button
      css={{
        padding: noPadding ? 0 : 4,
        borderRadius: '50%',
        userSelect: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        outline: 0,
        border: 0,
        backgroundColor: theme.colors.transparent,
        '&:hover': {
          backgroundColor: theme.background.md,
        },
        '&:active': {
          transform: 'translateY(1px)',
        },
        '&:disabled': {
          backgroundColor: theme.colors.transparent,
          cursor: 'not-allowed',
          pointerEvents: 'none',
        },
      }}
      {...rest}
    />
  )
}
