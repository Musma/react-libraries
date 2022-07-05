import { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const Heading6 = ({ className = '', children, ...rest }: Props) => {
  return (
    <h6 className={`text-[16px] font-semibold leading-6 tracking-[-0.2px] ${className}`} {...rest}>
      {children}
    </h6>
  )
}
