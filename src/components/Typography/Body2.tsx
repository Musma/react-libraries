import { ReactNode } from "react"

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export const Body2 = (props: Props) => {
  return (
    <p
      className="text-[16px] font-normal leading-[22px] tracking-[-0.2px]"
      {...props}
    >
      {props.children}
    </p>
  )
}
