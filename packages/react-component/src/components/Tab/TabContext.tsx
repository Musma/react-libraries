import { createContext, useContext } from 'react'

interface ITabContext {
  variant: 'hat' | 'rect'
  value: string | number
  onTabValueChange: (value: string | number) => void
}

export const TabContext = createContext<ITabContext | null>(null)

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
