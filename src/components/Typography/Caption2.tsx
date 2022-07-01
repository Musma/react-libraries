import React from 'react'

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export const Caption2 = (props: Props) => {
  return (
    <caption className="text-[10px] font-normal leading-[14px]" {...props}>
      {props.children}
    </caption>
  )
}
