import { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const Heading1 = ({ children, className = '', ...rest }: Props) => {
  return (
    <h1 className={`text-[40px] font-bold leading-[56px] tracking-[-0.6px] ${className}`} {...rest}>
      {children}
    </h1>
  )
}
