import { ThemeProvider } from '@emotion/react'

import { Examples } from 'src/examples'
import { DefaultTheme, GlobalStyle } from 'src/styles'

export const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Examples />
    </ThemeProvider>
  )
}
