import React from 'react'

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
}

export const Caption2 = ({ children, className = '', ...rest }: Props) => {
  return (
    <caption className={`text-[10px] font-normal leading-[14px] ${className}`} {...rest}>
      {children}
    </caption>
  )
}
