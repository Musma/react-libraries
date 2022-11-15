import { ButtonHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { ButtonBase } from 'src/elements'

interface IconAdornmentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  noPadding?: boolean
}

export const IconAdornment = ({ noPadding = false, ...rest }: IconAdornmentProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
      css={{
        minWidth: 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        padding: noPadding ? 0 : 4,
        userSelect: 'none',
        cursor: 'pointer',
        backgroundColor: theme.colors.transparent,
        '&:hover': {
          backgroundColor: theme.buttonBackgroundColor,
        },
        '&:disabled': {
          backgroundColor: theme.colors.transparent,
          cursor: 'not-allowed',
          '&:active': {
            transform: 'none',
          },
        },
      }}
      {...rest}
    />
  )
}
