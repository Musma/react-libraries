import { forwardRef, TextareaHTMLAttributes } from 'react'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextareaBase = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return (
    <textarea
      ref={ref}
      css={{
        padding: 0,
        border: 0,
        appearance: 'none',
        outline: 'none',
        boxSizing: 'border-box',
        resize: 'none',
      }}
      {...props}
    />
  )
})

TextareaBase.displayName = 'TextareaBase'
