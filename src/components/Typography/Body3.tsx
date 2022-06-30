import { ReactNode } from 'react'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export const Body3 = (props: Props) => {
  return (
    <p className="text-[14px] font-normal leading-5" {...props}>
      {props.children}
    </p>
  )
}
