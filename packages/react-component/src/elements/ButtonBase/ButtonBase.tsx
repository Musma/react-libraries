import { ButtonHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonBase = ({ type = 'button', ...rest }: ButtonBaseProps) => {
  const theme = useTheme()
  return (
    <button
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
}
