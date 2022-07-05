import { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const Heading3 = ({ className = '', children, ...rest }: Props) => {
  return (
    <h3
      className={`text-[24px] font-semibold leading-[32px] tracking-[-0.6px] ${className}`}
      {...rest}
    >
      {children}
    </h3>
  )
}
