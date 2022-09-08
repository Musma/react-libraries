import { ReactNode, useMemo } from 'react'

import { Theme, ThemeContext, ThemeProvider, ThemeProviderProps, useTheme } from '@emotion/react'

import { theme as DefaultTheme } from 'src/styles/theme'

export const EmotionThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const setTheme = useMemo(() => {
    if (isEmptyObject(theme)) {
      return DefaultTheme
    }
    return theme
  }, [theme])
  return (
    <ThemeProvider theme={setTheme}>
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
