import { createContext, ReactNode, useContext } from 'react'

import { EmotionCache, ThemeProvider } from '@emotion/react'

import { FoldingNavBarProvider } from 'src/components'
import { NormalizeCSS, PretendardFont, MusmaTheme } from 'src/theme'

import { DefaultTheme } from './DefaultTheme'
import { ThemeObject, useMultiTheme } from './useMultiTheme'

interface MusmaProviderContextType {
  theme?: MusmaTheme
  emotionCache?: EmotionCache
  currentTheme?: string
  themeOptions: { label: string; value: string }[]
  handleThemeChange?: (themeName?: string) => void
}

const MusmaProviderContext = createContext<MusmaProviderContextType>({
  theme: DefaultTheme,
  themeOptions: [],
})

/**
 * @deprecated
 */
export function useMusmaTheme() {
  return useContext(MusmaProviderContext)?.theme || DefaultTheme
}

export function useThemeContext() {
  return useContext(MusmaProviderContext)
}

export interface MusmaProviderProps {
  /**
   * NormalizeCSS 사용 여부
   * @default true
   */
  withNormalizeCSS?: boolean
  /**
   * 무스마 디자인 시스템에서 Pretendard 폰트를 사용하고 있음
   * @default true
   */
  withPretendardFont?: boolean
  /**
   * NormalizeCSS 사용 여부
   * @default true
   */
  theme?: MusmaTheme
  /**
   * 여러 테마가 필요할 때 사용합니다. 일단 전달하면 첫 번째 항목이 기본 테마가 됩니다
   */
  themeList?: ThemeObject[]
  /**
   * SSR 환경에서 사용할 시 EmotionCache 객체를 생성하여 넣습니다.
   * @default undefined
   */
  emotionCache?: EmotionCache
  /**
   * ReactNode 자식을 넘깁니다.
   */
  children?: ReactNode
}

export const MusmaProvider = ({
  withNormalizeCSS = true,
  withPretendardFont = true,
  theme = DefaultTheme,
  themeList = [],
  children,
}: MusmaProviderProps) => {
  const { value, currentThemeObject } = useMultiTheme({ theme, themeList })

  return (
    <ThemeProvider theme={currentThemeObject}>
      <MusmaProviderContext.Provider value={value}>
        <FoldingNavBarProvider>
          {withNormalizeCSS && <NormalizeCSS />}
          {withPretendardFont && <PretendardFont />}
          {children}
        </FoldingNavBarProvider>
      </MusmaProviderContext.Provider>
    </ThemeProvider>
  )
}
