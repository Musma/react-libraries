import { PropsWithChildren, useCallback, useMemo, useState } from 'react'

import { TabContext } from './TabContext'
import { TabValue, Variant } from './types'

interface TabContainerProps extends PropsWithChildren {
  defaultTab: TabValue
  variant?: Variant
}

export const TabContainer = ({ children, defaultTab, variant = 'rect' }: TabContainerProps) => {
  const [currentTab, setCurrentTab] = useState<string | number>(defaultTab)
  const handleTabClick = useCallback((value: string | number) => {
    setCurrentTab(value)
  }, [])
  const value = useMemo(() => {
    return {
      variant,
      currentTab,
      handleTabClick,
    }
  }, [currentTab, handleTabClick, variant])
  return (
    <div>
      <TabContext.Provider value={value}>{children}</TabContext.Provider>
    </div>
  )
}
