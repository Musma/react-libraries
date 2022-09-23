import { Examples } from 'src/examples'

import { GlobalStyle } from './styles'
import { MusmaProvider, DefaultTheme } from './theme'

export const App = () => {
  return (
    <MusmaProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Examples />
    </MusmaProvider>
  )
}
