import { PropsWithChildren, useCallback, useMemo, useState } from 'react'

import { Box } from 'src/elements'

import { TabContext } from './TabContext'

interface TabContainerProps extends PropsWithChildren {
  defaultTab: string | number
  variant?: 'hat' | 'rect'
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
    <Box>
      <TabContext.Provider value={value}>{children}</TabContext.Provider>
    </Box>
  )
}
