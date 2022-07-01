import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Heading4 = (props: Props) => {
  return (
    <h4 className="text-[20px] font-semibold leading-[30px] tracking-[-0.2px]" {...props}>
      {props.children}
    </h4>
  )
}
