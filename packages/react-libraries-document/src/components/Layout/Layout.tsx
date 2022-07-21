import { ReactNode } from 'react'
import * as React from 'react'
import { Header, Navigation } from 'src/components'

interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="mx-auto flex w-full max-w-7xl flex-1 px-10">
        <Navigation />
        <div className="container mx-auto ml-60 flex-1 p-10">{children}</div>
      </div>
    </div>
  )
}
