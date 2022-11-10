import { forwardRef, InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const InputBase = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      ref={ref}
      css={{ padding: 0, border: 0, appearance: 'none', outline: 'none', boxSizing: 'border-box' }}
      {...props}
    />
  )
})

InputBase.displayName = 'InputBase'
