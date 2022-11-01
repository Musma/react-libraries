import { forwardRef, HTMLAttributes } from 'react'

type BoxProps = HTMLAttributes<HTMLDivElement>

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <div ref={ref} css={{ boxSizing: 'border-box' }} {...props} />
})

Box.displayName = 'Box'
