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
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        padding: noPadding ? 0 : 4,
        userSelect: 'none',
        outline: 0,
        border: 0,
        cursor: 'pointer',
        backgroundColor: theme.colors.transparent,
        '&:hover': {
          backgroundColor: theme.buttonBackgroundColor,
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
