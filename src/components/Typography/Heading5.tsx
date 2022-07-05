import { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const Heading5 = ({ className = '', children, ...rest }: Props) => {
  return (
    <h5 className={`text-[18px] font-semibold leading-6 tracking-[-0.2px] ${className}`} {...rest}>
      {children}
    </h5>
  )
}
