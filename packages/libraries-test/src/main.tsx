import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MusmaProvider, DefaultTheme } from '@musma/react-component'

import { App } from './App'
// import { AppContainer } from './layout'
// import { AuthContainer } from './layout'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: {
      lighter: '#F9F6EB',
      light: '#DEB531',
      main: '#C7A635',
      dark: '#FD9009',
      darker: '#DA610F',
    },
  },
}

render(
  <StrictMode>
    <MusmaProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<AppContainer />} /> */}
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>

      {/* <App /> */}

      {/* <AuthContainer /> */}
    </MusmaProvider>
  </StrictMode>,
  document.getElementById('root'),
)
