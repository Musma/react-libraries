import { forwardRef, InputHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const InputBase = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const theme = useTheme()
  return (
    <input
      ref={ref}
      autoComplete="off"
      css={{
        padding: 0,
        border: 0,
        appearance: 'none',
        outline: 'none',
        boxSizing: 'border-box',
        '&::placeholder': {
          color: theme.colors.gray.main,
        },
      }}
      {...props}
    />
  )
})

InputBase.displayName = 'InputBase'
