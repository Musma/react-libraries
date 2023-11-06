import { createContext, PropsWithChildren, useCallback, useContext } from 'react'

import { useLocalStorage } from '@musma/react-utils'

interface FolderNavBarProviderContextType {
  isNavFold: boolean
  toggleNavFoldState(state?: boolean): void
  isMenuState: Record<string, boolean>
  toggleNavMenuItem(items: Record<string, boolean>): void
}

const FolderNavBarContext = createContext<FolderNavBarProviderContextType>({
  isNavFold: false,
  toggleNavFoldState: () => null,
  isMenuState: {},
  toggleNavMenuItem: () => null,
})

export function useFolderNavBarContext() {
  return useContext(FolderNavBarContext)
}

export const FolderNavBarProvider = ({ children }: PropsWithChildren) => {
  const [isNavFold, setIsNavFold] = useLocalStorage('isNavFold', false)
  const [isMenuState, setIsMenuState] = useLocalStorage<Record<string, boolean>>('isMenuState', {})

  const toggleNavFoldState = useCallback((state?: boolean) => {
    setIsNavFold((current) => state ?? !current)
  }, [])

  const toggleNavMenuItem = useCallback((items: Record<string, boolean>) => {
    setIsMenuState(items)
  }, [])

  return (
    <FolderNavBarContext.Provider
      value={{
        isNavFold,
        toggleNavFoldState,
        isMenuState,
        toggleNavMenuItem,
      }}
    >
      {children}
    </FolderNavBarContext.Provider>
  )
}
