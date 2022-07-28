import { Fragment } from 'react'

import { Typography } from '../Typography'
import { ReactComponent as TabLeftIcon } from './images/tab_left.svg'
import { ReactComponent as TabRightIcon } from './images/tab_right.svg'
import { TabProps } from './types'

export const HatTab = ({ title, selectedTab, setSelectedTab }: TabProps) => {
  const inActive = (
    <Typography type="subTitle" variant="subTitle2" className="px-[34px] py-[10px] text-[#BAC7D5]">
      {title}
    </Typography>
  )
  const active = (
    <Fragment>
      <TabLeftIcon />
      <Typography
        type="subTitle"
        variant="subTitle2"
        className="border-t border-t-[#BAC7D5] bg-white px-6 py-[10px]"
      >
        {title}
      </Typography>
      <TabRightIcon />
    </Fragment>
  )

  return (
    <li className="flex h-10 cursor-pointer" onClick={() => setSelectedTab(title)}>
      {title === selectedTab ? active : inActive}
    </li>
  )
}
