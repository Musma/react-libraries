import { ReactNode } from 'react'

import { TabContext } from './TabContext'

interface TabContainerProps {
  value: string | number
  variant?: 'hat' | 'rect'
  children?: ReactNode
  onTabValueChange: (value: string | number) => void
}

export const TabContainer = ({
  value,
  variant = 'rect',
  children,
  onTabValueChange,
}: TabContainerProps) => {
  return (
    <TabContext.Provider
      value={{
        value,
        variant,
        onTabValueChange,
      }}
    >
      {children}
    </TabContext.Provider>
  )
}
