
import { css } from '@emotion/css'
import { useState } from 'react'
import { Tabs } from 'src/components'

export const TabsExample = () => {
  const [currentTab, setCurrentTab] = useState('a')
  return (
    <div>
      <Tabs titles={['tab1', 'tab2', 'tab3']} handleSelectTab={(title) => setCurrentTab(title)}/>
      <Tabs titles={['tab1', 'tab', 'tab3']} handleSelectTab={(title) => setCurrentTab(title)} variant='rect'/>
    </div>
  )
}
