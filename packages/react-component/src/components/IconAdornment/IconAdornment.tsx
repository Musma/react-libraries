import { ButtonHTMLAttributes, forwardRef, memo } from 'react'

import { useTheme } from '@emotion/react'

import { ButtonBase } from 'src/elements'

interface IconAdornmentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  noPadding?: boolean
}

const _IconAdornment = forwardRef<HTMLButtonElement, IconAdornmentProps>(
  ({ noPadding = false, ...rest }, ref) => {
    const theme = useTheme()
    return (
      <ButtonBase
        ref={ref}
        css={{
          width: 'fit-content',
          height: 'fit-content',
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
            color: theme.colors.gray.main,
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
  },
)

export const IconAdornment = memo(_IconAdornment)
