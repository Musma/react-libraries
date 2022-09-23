import { createContext, ReactNode } from 'react'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { DefaultTheme } from '../DefaultTheme'
import { NormalizeCSS } from '../NormalizeCSS'
import { EmotionTheme } from '../types'

interface EmotionThemeProviderContextType {
  theme?: EmotionTheme
}

const EmotionThemeProviderContext = createContext<EmotionThemeProviderContextType>({
  theme: DefaultTheme,
})

export interface ThemeProviderProps {
  withNormalizeCSS?: boolean
  theme?: EmotionTheme
  children?: ReactNode
}

export const ThemeProvider = ({
  withNormalizeCSS,
  theme = DefaultTheme,
  children,
}: ThemeProviderProps) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <EmotionThemeProviderContext.Provider value={{ theme }}>
        {withNormalizeCSS && <NormalizeCSS />}
        {children}
      </EmotionThemeProviderContext.Provider>
    </EmotionThemeProvider>
  )
}
