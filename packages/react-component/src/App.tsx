import { Examples } from 'src/examples'
import { GlobalStyle } from 'src/styles'

import { ThemeProvider } from './components'
import { DefaultTheme } from './theme'

export const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Examples />
    </ThemeProvider>
  )
}
