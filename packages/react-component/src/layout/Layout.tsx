import { PropsWithChildren } from 'react'
import { pages } from 'src/main'
import Navigation from './Navigation'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen">
      <Navigation pages={pages} />
      <main className="ml-[240px] p-20">{children}</main>
    </div>
  )
}

export default Layout
