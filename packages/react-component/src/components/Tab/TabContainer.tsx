import { ReactNode } from 'react'

import { TabContext } from './TabContext'

interface TabContainerProps<T> {
  value: T
  variant?: 'hat' | 'rect'
  children?: ReactNode
  onTabValueChange: (value: string | number) => void
}

export const TabContainer = <T extends string | number>({
  value,
  variant = 'rect',
  children,
  onTabValueChange,
}: TabContainerProps<T>) => {
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
