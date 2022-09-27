import { createContext, ReactNode, useContext } from 'react'

import { ThemeProvider } from '@emotion/react'

import { DefaultTheme, NormalizeCSS, PretendardFont, MusmaTheme } from 'src/theme'

interface MusmaProviderContextType {
  theme?: MusmaTheme
}

const MusmaProviderContext = createContext<MusmaProviderContextType>({
  theme: DefaultTheme,
})

export function useMusmaTheme() {
  return useContext(MusmaProviderContext)?.theme || DefaultTheme
}

export interface MusmaProviderProps {
  withNormalizeCSS?: boolean
  withPretendardFont?: boolean
  theme?: MusmaTheme
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
