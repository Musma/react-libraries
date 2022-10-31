import { forwardRef, InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const InputBase = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input ref={ref} css={{ border: 'none', appearance: 'none', outline: 'none' }} {...props} />
  )
})

InputBase.displayName = 'InputBase'
