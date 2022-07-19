import Link from 'next/link'

export const Navigation = () => {
  return (
    <nav className="w-60 border-r">
      <ul>
        <li>
          <div>Element</div>
          <ul>
            <li>
              <Link href="/components/button">Button</Link>
            </li>
            <li>
              <Link href="/components/tag">tag</Link>
            </li>
            <li>
              <Link href="/components/select">select</Link>
            </li>
            <li>
              <Link href="/components/textinput">textinput</Link>
            </li>
            <li>
              <Link href="/components/tooltip">tooltip</Link>
            </li>
            <li>
              <Link href="/components/typography">typography</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div>Copyright Musma</div>
    </nav>
  )
}
