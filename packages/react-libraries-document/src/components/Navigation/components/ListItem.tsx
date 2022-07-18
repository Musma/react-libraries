import Link from 'next/link'

interface ListItemProps {
  to: string
  label: string
}

export const ListItem = ({ label, to }: ListItemProps) => {
  return <Link href={to}>{label}</Link>
}
