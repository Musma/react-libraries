import { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  className?: string
}

export const SubTitle2 = ({ className, children = '', ...rest }: Props) => {
  return (
    <p className={`text-[14px] font-semibold leading-5 ${className}`} {...rest}>
      {children}
    </p>
  )
}
