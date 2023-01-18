import { BrowserRouter } from 'react-router-dom'

import { createRoot } from 'react-dom/client'

import { DefaultTheme, MusmaProvider } from 'src/theme'

import Component from './Component'

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

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <MusmaProvider theme={theme}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </MusmaProvider>,
  )
}
