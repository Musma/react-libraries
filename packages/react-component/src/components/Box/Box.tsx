import { HTMLAttributes } from 'react'

type BoxProps = HTMLAttributes<HTMLDivElement>

export const Box = (props: BoxProps) => {
  return <div {...props} />
}
