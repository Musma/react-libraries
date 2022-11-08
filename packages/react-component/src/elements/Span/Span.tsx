import { HTMLAttributes } from 'react'

type SpanProps = HTMLAttributes<HTMLSpanElement>

export const Span = (props: SpanProps) => {
  return <span {...props} />
}
