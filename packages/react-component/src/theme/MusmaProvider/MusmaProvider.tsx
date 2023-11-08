import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'

import { EmotionCache, Theme, ThemeProvider } from '@emotion/react'

import { FoldingNavBarProvider } from 'src/components'
import { NormalizeCSS, PretendardFont } from 'src/theme'

interface MusmaProviderContextType {
  currentTheme: Theme
  emotionCache?: EmotionCache
  themeOptions: { label: string; value: Theme }[]
  onThemeChange: (theme?: Theme) => void
}

const MusmaProviderContext = createContext<MusmaProviderContextType | null>(null)

export function useMusmaTheme() {
  const context = useContext(MusmaProviderContext)
  if (!context) {
    throw new Error('MusmaProvider 하위에서 사용해주세요')
  }
  return context
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
  defaultTheme: Theme
  /**
   * 여러 색상 테마가 필요할 때 사용합니다. 일단 전달하면 첫 번째 항목이 기본 테마가 됩니다
   */
  themeOptions?: { label: string; value: Theme }[]
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
  defaultTheme,
  themeOptions = [],
  children,
}: MusmaProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme)

  const onThemeChange = useCallback(
    (value?: Theme) => {
      setCurrentTheme(value ?? defaultTheme)
    },
    [defaultTheme],
  )

  const value = useMemo(() => {
    return {
      currentTheme,
      themeOptions,
      onThemeChange,
    }
  }, [currentTheme, themeOptions, onThemeChange])

  return (
    <ThemeProvider theme={currentTheme}>
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
