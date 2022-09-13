import { ReactNode } from 'react'

import { Theme, ThemeContext, ThemeProvider, ThemeProviderProps, useTheme } from '@emotion/react'

import { theme as DefaultTheme } from 'src/styles/theme'

export const EmotionThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return (
    <ThemeProvider theme={isEmptyObject(theme) ? DefaultTheme : theme}>
      <EmotionThemeContext>{children}</EmotionThemeContext>
    </ThemeProvider>
  )
}

interface EmotionThemeContextProps {
  children: ReactNode
}

export const EmotionThemeContext = ({ children }: EmotionThemeContextProps) => {
  const theme = useTheme()
  return (
    <ThemeContext.Provider value={typeof theme === 'object' ? theme : DefaultTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

const isEmptyObject = (
  obj: Record<string, unknown> | Partial<Theme> | ((outerTheme: Theme) => Theme),
) => {
  if (obj.constructor === Object && Object.keys(obj).length === 0) {
    return true
  }

  return false
}
