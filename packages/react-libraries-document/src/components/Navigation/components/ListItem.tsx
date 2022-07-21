import Link from 'next/link'

interface ListItemProps {
  href: string
  label: string
}

export const ListItem = ({ label, href }: ListItemProps) => {
  return (
    <li className="mb-4 last-of-type:mb-0">
      <Link href={href}>
        <a className="text-base">{label}</a>
      </Link>
    </li>
  )
}
