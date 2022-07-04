import React from 'react'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  className?: string
}

export const SubTitle1 = ({ className = '', children, ...rest }: Props) => {
  return (
    <p className={`text-[20px] font-normal leading-none tracking-[-0.2px] ${className}`} {...rest}>
      {children}
    </p>
  )
}
