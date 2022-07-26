import classNames from 'classnames'

import { SubTitle } from '../SubTitle'

export interface TabProps {
  title: string
  selectedTab: string
  setSelectedTab: (title: string) => void
}

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
      <SubTitle element={2} className={title === selectedTab ? 'text-[#036DB7]' : 'text-[#BAC7D5]'}>
        {title}
      </SubTitle>
    </li>
  )
}
