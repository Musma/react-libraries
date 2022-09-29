import { HTMLAttributes } from 'react'

type IconAdornmentProps = HTMLAttributes<HTMLButtonElement>

export const IconAdornment = (props: IconAdornmentProps) => {
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
        backgroundColor: 'transparent',
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
