import { Link } from 'react-router-dom'
import { PagesType } from 'src/main'

interface NavigationProps {
  pages: PagesType
}

const Navigation = ({ pages }: NavigationProps) => {
  return (
    <nav className="fixed h-full w-[240px] border-r pl-10 pt-20">
      <ul>
        <li key={'home'}>
          <Link to={'/'}>Home</Link>
        </li>
        {Object.keys(pages).map((key) => (
          <li key={key}>
            <Link to={`${key}`}>{key}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
