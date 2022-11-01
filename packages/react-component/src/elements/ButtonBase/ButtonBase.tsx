import { ButtonHTMLAttributes } from 'react'

type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonBase = ({ type = 'button', ...rest }: ButtonBaseProps) => {
  return (
    <button
      type={type}
      css={{
        minWidth: 64,
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
}
