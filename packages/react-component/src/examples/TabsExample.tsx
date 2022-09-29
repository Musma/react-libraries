import { useState } from 'react'

import { Tabs } from 'src/components'

export const TabsExample = () => {
  const [currentTab, setCurrentTab] = useState('a')
  const [currentTab2, setCurrentTab2] = useState('a')
  return (
    <div>
      <Tabs titles={['tab1', 'tab2', 'tab3']} handleSelectTab={(title) => setCurrentTab(title)} />
      current tab: {currentTab}
      <Tabs
        titles={['tab1', 'tab2', 'tab3']}
        handleSelectTab={(title) => setCurrentTab2(title)}
        variant="rect"
      />
      current tab: {currentTab2}
    </div>
  )
}
