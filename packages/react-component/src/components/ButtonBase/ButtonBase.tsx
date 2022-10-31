import { ButtonHTMLAttributes } from 'react'

type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonBase = (props: ButtonBaseProps) => {
  return (
    <button
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
      {...props}
    />
  )
}
