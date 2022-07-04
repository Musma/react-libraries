import React from 'react'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  className?: string
}

export const SubTitle2 = ({ className, children = '', ...rest }: Props) => {
  return (
    <p className={`text-[14px] font-semibold leading-5 ${className}`} {...rest}>
      {children}
    </p>
  )
}
