import { ReactNode } from 'react'

interface ListProps {
  label: string
  children?: ReactNode
}

export const List = ({ children }: ListProps) => {
  return <div>{children}</div>
}
