import { SVGProps } from 'react'

export interface NavBarLinkData {
  label: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  to?: string
}

export interface NavBarItemsData extends NavBarLinkData {
  children?: Omit<NavBarLinkData, 'icon'>[]
}
