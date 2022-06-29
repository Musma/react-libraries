import { ReactNode } from 'react'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export const Body3 = (props: Props) => {
  return (
    <p className="align-middle text-[14px] font-normal leading-[20px]" {...props}>
      {props.children}
    </p>
  )
}
