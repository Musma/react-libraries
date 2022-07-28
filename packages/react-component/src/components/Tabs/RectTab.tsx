import classNames from 'classnames'

import { Typography } from '../Typography'
import { TabProps } from './types'

export const RectTab = ({ title, selectedTab, setSelectedTab }: TabProps) => {
  return (
    <li
      className={classNames(
        'cursor-pointer border-b px-6 py-[10px]',
        {
          'border-b-[#BAC7D5]': title !== selectedTab,
        },
        {
          'border-b-[#036DB7]': title === selectedTab,
        },
      )}
      onClick={() => setSelectedTab(title)}
    >
      <Typography
        type="subTitle"
        variant="subTitle2"
        className={title === selectedTab ? 'text-[#036DB7]' : 'text-[#BAC7D5]'}
      >
        {title}
      </Typography>
    </li>
  )
}
