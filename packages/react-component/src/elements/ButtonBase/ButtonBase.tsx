import { ButtonHTMLAttributes, forwardRef } from 'react'

import { useTheme } from '@emotion/react'

type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ type = 'button', ...rest }, ref) => {
    const theme = useTheme()
    return (
      <button
        ref={ref}
        type={type}
        css={{
          minWidth: theme.inputSize.minWidth,
          padding: 0,
          appearance: 'none',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          '&:active': {
            transform: 'translateY(1px)',
          },
        }}
        {...rest}
      />
    )
  },
)

ButtonBase.displayName = 'ButtonBase'
