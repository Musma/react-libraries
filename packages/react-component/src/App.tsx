import { ThemeProvider } from '@emotion/react'

import { Examples } from 'src/examples'
import { theme, GlobalStyle } from 'src/styles'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Examples />
    </ThemeProvider>
  )
}
