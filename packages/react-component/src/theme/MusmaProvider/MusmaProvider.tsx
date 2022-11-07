import { createContext, ReactNode, useContext } from 'react'

import { css, EmotionCache, Global, ThemeProvider } from '@emotion/react'

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
  withGlobalCSS?: boolean
  withNormalizeCSS?: boolean
  withPretendardFont?: boolean
  theme?: MusmaTheme
  emotionCache?: EmotionCache
  children?: ReactNode
}

export const MusmaProvider = ({
  withGlobalCSS = true,
  withNormalizeCSS = true,
  withPretendardFont = true,
  theme = DefaultTheme,
  children,
}: MusmaProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MusmaProviderContext.Provider value={{ theme }}>
        {withGlobalCSS && (
          <Global
            styles={css`
              html {
                overflow: overlay;
              }
            `}
          />
        )}
        {withNormalizeCSS && <NormalizeCSS />}
        {withPretendardFont && <PretendardFont />}
        {children}
      </MusmaProviderContext.Provider>
    </ThemeProvider>
  )
}
