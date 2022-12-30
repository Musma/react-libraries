import { BrowserRouter } from 'react-router-dom'

import { createRoot } from 'react-dom/client'

import { DefaultTheme, MusmaProvider } from 'src/theme'

import { Component } from './Component'
import { ToastContextProvider } from './components/ToastPopup/ToastPopupContext'

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
      <ToastContextProvider>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </ToastContextProvider>
    </MusmaProvider>,
  )
}
