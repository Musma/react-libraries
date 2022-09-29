import { createContext, ReactNode, useContext } from 'react'

import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react'

import {
  DefaultTheme,
  DefaultEmotionCache,
  NormalizeCSS,
  PretendardFont,
  MusmaTheme,
} from 'src/theme'

interface MusmaProviderContextType {
  theme?: MusmaTheme
  emotionCache?: EmotionCache
}

const MusmaProviderContext = createContext<MusmaProviderContextType>({
  theme: DefaultTheme,
  emotionCache: DefaultEmotionCache,
})

export function useMusmaTheme() {
  return useContext(MusmaProviderContext)?.theme || DefaultTheme
}

export function useEmotionCache() {
  return useContext(MusmaProviderContext)?.emotionCache || DefaultEmotionCache
}

export interface MusmaProviderProps {
  withNormalizeCSS?: boolean
  withPretendardFont?: boolean
  theme?: MusmaTheme
  emotionCache?: EmotionCache
  children?: ReactNode
}

export const MusmaProvider = ({
  withNormalizeCSS = true,
  withPretendardFont = true,
  theme = DefaultTheme,
  emotionCache = DefaultEmotionCache,
  children,
}: MusmaProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={DefaultEmotionCache}>
        <MusmaProviderContext.Provider value={{ theme, emotionCache }}>
          {withNormalizeCSS && <NormalizeCSS />}
          {withPretendardFont && <PretendardFont />}
          {children}
        </MusmaProviderContext.Provider>
      </CacheProvider>
    </ThemeProvider>
  )
}
