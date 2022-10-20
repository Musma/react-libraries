import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

type IconAdornmentProps = HTMLAttributes<HTMLButtonElement>

export const IconAdornment = (props: IconAdornmentProps) => {
  const theme = useTheme()
  return (
    <button
      css={{
        padding: 4,
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
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
        '&:active': {
          transform: 'translateY(1px)',
        },
      }}
      {...props}
    />
  )
}
