import { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  className?: string
}

export const SubTitle1 = ({ className = '', children, ...rest }: Props) => {
  return (
    <p className={`text-[20px] font-normal leading-none tracking-[-0.2px] ${className}`} {...rest}>
      {children}
    </p>
  )
}
