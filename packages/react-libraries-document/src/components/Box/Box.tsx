import { HTMLAttributes } from 'react'

type BoxProps = HTMLAttributes<HTMLDivElement>

export const Box = ({ className = '', ...rest }: BoxProps) => {
  return <div className={`mb-2 flex rounded border p-4 last-of-type:mb-0 ${className}`} {...rest} />
}
