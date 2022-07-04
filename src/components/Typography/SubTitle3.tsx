import React from 'react'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  className?: string
}

export const SubTitle3 = ({ children, className = '', ...rest }: Props) => {
  return (
    <p className={`text-[12px] font-semibold leading-[18px] ${className}`} {...rest}>
      {children}
    </p>
  )
}
