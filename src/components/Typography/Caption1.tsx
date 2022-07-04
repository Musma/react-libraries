import React from 'react'

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
}

export const Caption1 = ({ children, className = '', ...rest }: Props) => {
  return (
    <caption className={`text-[12px] font-normal leading-4 ${className}`} {...rest}>
      {children}
    </caption>
  )
}
