import React from 'react'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  className?: string
}

export const Body1 = ({ children, className = '', ...rest }: Props) => {
  return (
    <p className={`text-[18px] font-normal leading-6 tracking-[-0.2px] ${className}`} {...rest}>
      {children}
    </p>
  )
}
