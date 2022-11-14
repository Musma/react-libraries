import { LiHTMLAttributes } from 'react'

type ListItempProps = LiHTMLAttributes<HTMLLIElement>

export const ListItem = (props: ListItempProps) => {
  return <li {...props} />
}
