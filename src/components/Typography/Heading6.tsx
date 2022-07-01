import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Heading6 = (props: Props) => {
  return (
    <h6 className="text-[16px] font-semibold leading-6 tracking-[-0.2px]" {...props}>
      {props.children}
    </h6>
  )
}
