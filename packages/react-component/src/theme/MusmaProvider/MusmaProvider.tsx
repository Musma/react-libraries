import { createContext, ReactNode } from 'react'

import { ThemeProvider } from '@emotion/react'

import { DefaultTheme } from '../DefaultTheme'
import { NormalizeCSS } from '../NormalizeCSS'
import { PretendardFont } from '../PretendardFont'
import { MusmaTheme } from '../types'

interface MusmaProviderContextType {
  theme?: MusmaTheme
}

const MusmaProviderContext = createContext<MusmaProviderContextType>({
  theme: DefaultTheme,
})

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
