import React from 'react'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export const Body1 = (props: Props) => {
  return (
    <p className="text-[18px] font-normal leading-6 tracking-[-0.2px]" {...props}>
      {props.children}
    </p>
  )
}
