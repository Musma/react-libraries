import { ButtonHTMLAttributes, forwardRef } from 'react'

type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ type = 'button', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        css={{
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
