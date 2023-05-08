import { createContext, ReactNode, useContext } from 'react'

import { EmotionCache, ThemeProvider } from '@emotion/react'

import { NormalizeCSS, PretendardFont, MusmaTheme } from 'src/theme'

import { DefaultTheme } from './DefaultTheme'

interface MusmaProviderContextType {
  theme?: MusmaTheme
  emotionCache?: EmotionCache
}

const MusmaProviderContext = createContext<MusmaProviderContextType>({
  theme: DefaultTheme,
})

export function useMusmaTheme() {
  return useContext(MusmaProviderContext)?.theme || DefaultTheme
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
  children,
}: MusmaProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MusmaProviderContext.Provider value={{ theme }}>
        {withNormalizeCSS && <NormalizeCSS />}
        {withPretendardFont && <PretendardFont />}
        {children}
      </MusmaProviderContext.Provider>
    </ThemeProvider>
  )
}
