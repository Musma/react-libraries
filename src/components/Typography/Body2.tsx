import React from 'react'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  className?: string
}

export const Body2 = ({ children, className = '', ...rest }: Props) => {
  return (
    <p
      className={`text-[16px] font-normal leading-[22px] tracking-[-0.2px] ${className}`}
      {...rest}
    >
      {children}
    </p>
  )
}
