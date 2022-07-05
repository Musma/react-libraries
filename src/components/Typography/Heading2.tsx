import { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const Heading2 = ({ className = '', children, ...rest }: Props) => {
  return (
    <h2 className={`text-[32px] font-bold leading-[48px] tracking-[-0.6px] ${className}`} {...rest}>
      {children}
    </h2>
  )
}
