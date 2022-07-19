import { ReactNode } from 'react'
import * as React from 'react'
import { Header, Navigation } from 'src/components'
interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Navigation />
        <div className="container mx-auto flex-1">{children}</div>
      </div>
    </div>
  )
}
