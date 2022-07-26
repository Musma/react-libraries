import { Fragment } from 'react'

import { SubTitle } from '../SubTitle'
import { ReactComponent as TabLeftIcon } from './images/tab_left.svg'
import { ReactComponent as TabRightIcon } from './images/tab_right.svg'

export interface TabProps {
  title: string
  selectedTab: string
  setSelectedTab: (title: string) => void
}

export const HatTab = ({ title, selectedTab, setSelectedTab }: TabProps) => {
  const inActive = (
    <SubTitle element={2} className="px-[34px] py-[10px] text-[#BAC7D5]">
      {title}
    </SubTitle>
  )
  const active = (
    <Fragment>
      <TabLeftIcon />
      <SubTitle element={2} className="border-t border-t-[#BAC7D5] bg-white px-6 py-[10px]">
        {title}
      </SubTitle>
      <TabRightIcon />
    </Fragment>
  )

  return (
    <li className="flex h-10 cursor-pointer" onClick={() => setSelectedTab(title)}>
      {title === selectedTab ? active : inActive}
    </li>
  )
}
