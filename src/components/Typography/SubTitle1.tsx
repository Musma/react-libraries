import React from 'react'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export const SubTitle1 = (props: Props) => {
  return (
    <p className="text-[20px] font-normal leading-none tracking-[-0.2px]" {...props}>
      {props.children}
    </p>
  )
}
