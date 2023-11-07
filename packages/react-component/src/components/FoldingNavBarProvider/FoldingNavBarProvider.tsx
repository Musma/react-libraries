import { createContext, PropsWithChildren, useCallback, useContext } from 'react'

import { useLocalStorage } from '@musma/react-utils'

export const FOLDING_NAVBAR_TRANSITION = 'all 0.5s ease-in-out'

interface FoldingNavBarProviderValue {
  /**
   * 메뉴바의 폴딩 상태
   * @default false
   */
  isNavBarFolded: boolean
  toggleFoldingNavBar(state?: boolean): void
  /**
   * 서브 메뉴가 있는 메뉴들의 오픈 상태를 추적하는 데이터. (NavBar에 items를 넘겨야 추적 가능)
   * @default {}
   */
  isMenuState: Record<string, boolean>
  /**
   * isMenuState를 초기화 할 때 사용하는 함수
   */
  setMenuState(items: Record<string, boolean>): void
  /**
   * isMenuState를 초기화 할 때 사용하는 함수
   * @param label 상태를 변경하려는 대상의 label명
   */
  toggleMenuState(label: string): void
}

const FolderNavBarContext = createContext<FoldingNavBarProviderValue>({
  isNavBarFolded: false,
  toggleFoldingNavBar: () => null,
  isMenuState: {},
  setMenuState: () => null,
  toggleMenuState: () => null,
})

export function useFoldingNavBarContext() {
  return useContext(FolderNavBarContext)
}

export const FoldingNavBarProvider = ({ children }: PropsWithChildren) => {
  const [isNavBarFolded, setIsNavBrFolded] = useLocalStorage('isNavBarFolded', false)
  const [isMenuState, setIsMenuState] = useLocalStorage<Record<string, boolean>>('isMenuState', {})

  const toggleFoldingNavBar = useCallback(
    (state?: boolean) => {
      setIsNavBrFolded((current) => state ?? !current)
    },
    [setIsNavBrFolded],
  )

  const setMenuState = useCallback(
    (items: Record<string, boolean>) => {
      setIsMenuState(items)
    },
    [setIsMenuState, setIsNavBrFolded],
  )

  const toggleMenuState = useCallback(
    (label: string) => {
      setIsNavBrFolded(false)
      setIsMenuState((current) => ({
        ...current,
        [label]: !current[label],
      }))
    },
    [setIsNavBrFolded, setIsMenuState],
  )

  return (
    <FolderNavBarContext.Provider
      value={{
        isNavBarFolded,
        toggleFoldingNavBar,
        isMenuState,
        setMenuState,
        toggleMenuState,
      }}
    >
      {children}
    </FolderNavBarContext.Provider>
  )
}
