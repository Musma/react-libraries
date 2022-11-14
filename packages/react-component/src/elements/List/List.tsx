import { HTMLAttributes } from 'react'

type ListProps = HTMLAttributes<HTMLUListElement>

export const List = (props: ListProps) => {
  return <ul css={{ listStyle: 'none', padding: 0, margin: 0 }} {...props} />
}
