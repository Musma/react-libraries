import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Heading5 = (props: Props) => {
  return (
    <h5 className="text-[18px] font-semibold leading-6 tracking-[-0.2px]" {...props}>
      {props.children}
    </h5>
  )
}
