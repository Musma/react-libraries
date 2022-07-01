import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Heading1 = (props: Props) => {
  return (
    <h1 className="text-[40px] font-bold leading-[56px] tracking-[-0.6px]" {...props}>
      {props.children}
    </h1>
  )
}
