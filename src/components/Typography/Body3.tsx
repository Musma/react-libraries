import { ReactNode } from 'react'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  className?: string
}

export const Body3 = ({ children, className, ...rest }: Props) => {
  return (
    <p className={`text-[14px] font-normal leading-5 ${className}`} {...rest}>
      {children}
    </p>
  )
}
