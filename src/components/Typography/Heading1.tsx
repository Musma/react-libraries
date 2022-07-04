import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const Heading1 = ({ children, className = '', ...rest }: Props) => {
  return (
    <h1 className={`text-[40px] font-bold leading-[56px] tracking-[-0.6px] ${className}`} {...rest}>
      {children}
    </h1>
  )
}
