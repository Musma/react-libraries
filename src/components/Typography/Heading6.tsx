import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const Heading6 = ({ className = '', children, ...rest }: Props) => {
  return (
    <h6 className={`text-[16px] font-semibold leading-6 tracking-[-0.2px] ${className}`} {...rest}>
      {children}
    </h6>
  )
}
