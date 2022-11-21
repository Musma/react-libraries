import { createContext, useContext } from 'react'

interface ITabContext<T> {
  variant: 'hat' | 'rect'
  value: T
  onTabValueChange: (value: T) => void
}

export const createTabContext = <T extends string | number>() => {
  const tabContext = createContext<ITabContext<T> | null>(null)
  return tabContext
}

export const TabContext = createTabContext()

interface UseTabContextArgs {
  name: 'Tab' | 'TabPanel' | 'Tabs'
}

export const useTabContext = ({ name }: UseTabContextArgs) => {
  const tabContext = useContext(TabContext)

  if (!tabContext) {
    throw new Error(`${name}은 TabConainer의 하위 요소로만 사용할 수 있습니다`)
  }

  return tabContext
}
