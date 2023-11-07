import { createContext, PropsWithChildren, useCallback, useContext } from 'react'

import { useLocalStorage } from '@musma/react-utils'

interface FolderNavBarProviderContextType {
  isNavFold: boolean
  toggleNavFoldState(state?: boolean): void
  isMenuState: Record<string, boolean>
  setNavMenuItem(items: Record<string, boolean>): void
  toggleNavMenuItem(item: string): void
}

const FolderNavBarContext = createContext<FolderNavBarProviderContextType>({
  isNavFold: false,
  toggleNavFoldState: () => null,
  isMenuState: {},
  setNavMenuItem: () => null,
  toggleNavMenuItem: () => null,
})

export function useFolderNavBarContext() {
  return useContext(FolderNavBarContext)
}

export const FolderNavBarProvider = ({ children }: PropsWithChildren) => {
  const [isNavFold, setIsNavFold] = useLocalStorage('isNavFold', false)
  const [isMenuState, setIsMenuState] = useLocalStorage<Record<string, boolean>>('isMenuState', {})

  const toggleNavFoldState = useCallback(
    (state?: boolean) => {
      setIsNavFold((current) => state ?? !current)
    },
    [setIsNavFold],
  )

  const setNavMenuItem = useCallback(
    (items: Record<string, boolean>) => {
      setIsMenuState(items)
    },
    [setIsMenuState, setIsNavFold],
  )

  const toggleNavMenuItem = useCallback(
    (item: string) => {
      setIsNavFold(false)
      setIsMenuState((current) => ({
        ...current,
        [item]: !current[item],
      }))
    },
    [setIsNavFold, setIsMenuState],
  )

  return (
    <FolderNavBarContext.Provider
      value={{
        isNavFold,
        toggleNavFoldState,
        isMenuState,
        setNavMenuItem,
        toggleNavMenuItem,
      }}
    >
      {children}
    </FolderNavBarContext.Provider>
  )
}
