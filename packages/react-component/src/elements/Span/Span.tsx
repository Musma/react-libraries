import { forwardRef, HTMLAttributes } from 'react'

type SpanProps = HTMLAttributes<HTMLSpanElement>

export const Span = forwardRef<HTMLSpanElement, SpanProps>((props, ref) => {
  return <span ref={ref} {...props} />
})

Span.displayName = 'Span'
