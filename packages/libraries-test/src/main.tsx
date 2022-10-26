import { StrictMode } from 'react'
import { render } from 'react-dom'

import { MusmaProvider } from '@musma/react-component'

import { App } from './App'
// import { AppContainer } from './layout'
// import { AuthContainer } from './layout'

render(
  <StrictMode>
    <MusmaProvider>
      <App />
      {/* <AppContainer /> */}
      {/* <AuthContainer /> */}
    </MusmaProvider>
  </StrictMode>,
  document.getElementById('root'),
)
