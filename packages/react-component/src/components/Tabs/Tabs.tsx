import { useState, useEffect } from 'react'

import { HatTab } from './HatTab'
import { RectTab } from './RectTab'

interface TabsProps {
  titles: string[]
  handleSelectTab?: (title: string) => void
  variant?: 'hat' | 'rect'
}

export const Tabs = ({ titles, handleSelectTab, variant = 'hat' }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(titles[0])

  useEffect(() => {
    if (!handleSelectTab) return
    handleSelectTab(selectedTab)
  }, [handleSelectTab, selectedTab])

  if (variant === 'hat') {
    return (
      <ul className="flex items-center border-b border-b-[#BAC7D5]">
        {titles.map((title) => (
          <HatTab
            key={title}
            title={title}
            selectedTab={selectedTab}
            setSelectedTab={() => setSelectedTab(title)}
          />
        ))}
      </ul>
    )
  }
  return (
    <ul className="flex">
      {titles.map((title, index, array) => (
        <div key={title} className="flex items-center">
          <RectTab
            key={title}
            title={title}
            selectedTab={selectedTab}
            setSelectedTab={() => setSelectedTab(title)}
          />
          {index !== array.length - 1 && <div className="h-4 border-l border-l-[#BAC7D5]" />}
        </div>
      ))}
      <div className="flex-1 border-b border-b-[#BAC7D5]" />
    </ul>
  )
}
