import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Heading2 = (props: Props) => {
  return (
    <h2 className="text-[32px] font-bold leading-[48px] tracking-[-0.6px]" {...props}>
      {props.children}
    </h2>
  )
}
