import { Examples } from 'src/examples'

import { GlobalStyle } from './styles'
import { MusmaProvider } from './theme'
import { DefaultTheme } from './theme/MusmaProvider/DefaultTheme'

export const App = () => {
  return (
    <MusmaProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Examples />
    </MusmaProvider>
  )
}
