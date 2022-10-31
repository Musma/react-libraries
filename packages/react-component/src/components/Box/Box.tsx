import { forwardRef, HTMLAttributes } from 'react'

type BoxProps = HTMLAttributes<HTMLDivElement>

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <div {...props} ref={ref} />
})

Box.displayName = 'Box'
