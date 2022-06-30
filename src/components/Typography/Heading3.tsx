import { ReactNode } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const Heading3 = (props: Props) => {
  return (
    <h3 className="text-[24px] font-semibold leading-[32px] tracking-[-0.6px]" {...props}>
      {props.children}
    </h3>
  )
}
