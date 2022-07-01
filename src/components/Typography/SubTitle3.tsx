import React from 'react'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export const SubTitle3 = (props: Props) => {
  return (
    <p className="text-[12px] font-semibold leading-[18px]" {...props}>
      {props.children}
    </p>
  )
}
