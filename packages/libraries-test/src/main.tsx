import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MusmaProvider } from '@musma/react-component'

// import { App } from './App'
import { AppContainer } from './layout'
// import { AuthContainer } from './layout'

render(
  <StrictMode>
    <MusmaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContainer />} />
        </Routes>
      </BrowserRouter>

      {/* <App /> */}

      {/* <AuthContainer /> */}
    </MusmaProvider>
  </StrictMode>,
  document.getElementById('root'),
)
