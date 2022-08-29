import { ThemeProvider } from '@emotion/react'

import { Examples } from 'src/examples'
import { theme } from 'src/styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Examples />
    </ThemeProvider>
  )
}

export default App
