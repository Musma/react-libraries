import { ReactNode } from "react"

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export const Caption1 = (props: Props) => {
  return (
    <caption className="text-[12px] font-normal leading-4" {...props}>
      {props.children}
    </caption>
  )
}
