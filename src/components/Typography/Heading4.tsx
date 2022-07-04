import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const Heading4 = ({ className = '', children, ...rest }: Props) => {
  return (
    <h4
      className={`text-[20px] font-semibold leading-[30px] tracking-[-0.2px] ${className}`}
      {...rest}
    >
      {children}
    </h4>
  )
}
