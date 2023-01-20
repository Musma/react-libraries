import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DefaultTheme, MusmaProvider } from 'src/theme'

import Component from './Component'
import { ToastContextProvider } from './components/ToastPopup'

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
  render(
    <MusmaProvider theme={theme}>
      <ToastContextProvider position="top-right" limit={3}>
        <BrowserRouter>
          <Routes>
            <Route element={<Component />} path="" />
            <Route element={<div>여기서도 토스트 팝업이 잘 뜨는지 봐주십쇼</div>} path="toast" />
          </Routes>
        </BrowserRouter>
      </ToastContextProvider>
    </MusmaProvider>,
    rootElement,
  )
}
