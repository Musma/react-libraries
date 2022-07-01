import React from 'react'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export const SubTitle2 = (props: Props) => {
  return (
    <p className="text-[14px] font-semibold leading-5" {...props}>
      {props.children}
    </p>
  )
}
