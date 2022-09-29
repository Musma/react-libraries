import { useEffect, useState } from 'react'

import { useTheme } from '@emotion/react'

import { HatTab } from './HatTab'
import { RectTab } from './RectTab'

interface TabsProps {
  titles: string[]
  handleSelectTab?: (title: string) => void
  variant?: 'hat' | 'rect'
}

export const Tabs = ({ titles, handleSelectTab, variant = 'hat' }: TabsProps) => {
  const theme = useTheme()
  const [selectedTab, setSelectedTab] = useState(titles[0])

  useEffect(() => {
    if (!handleSelectTab) {
      return
    }

    handleSelectTab(selectedTab)
  }, [handleSelectTab, selectedTab])

  if (variant === 'hat') {
    return (
      <ul
        css={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: `1px solid ${theme.color.gray.darker}`,
        }}
      >
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
    <ul css={{ display: 'flex' }}>
      {titles.map((title, index, array) => (
        <div key={title} css={{ display: 'flex', alignItems: 'center' }}>
          <RectTab
            key={title}
            title={title}
            selectedTab={selectedTab}
            setSelectedTab={() => setSelectedTab(title)}
          />
          {index !== array.length - 1 && (
            <div
              css={{
                height: '16px',
                borderLeft: `1px solid ${theme.color.gray.darker}`,
              }}
            />
          )}
        </div>
      ))}
      <div css={{ flex: 1, borderBottom: `1px solid ${theme.color.gray.darker}` }} />
    </ul>
  )
}
