import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createRoot } from 'react-dom/client'

import { MusmaProvider, createTheme } from 'src/theme'

import Component from './Component'
import { ToastContextProvider } from './components'

const theme1 = createTheme({
  palette: {
    primary: {
      lighter: '#DFE7EB',
      light: '#D9E1E5',
      main: '#D0D5DD',
      dark: '#C4D2E0',
      darker: '#BAC7D5',
    },
    secondary: {
      lighter: '#F2F8FB',
      light: '#118EE5',
      main: '#036DB7',
      dark: '#025996',
      darker: '#003E6A',
    },
    warning: {
      lighter: '#FD9009',
      light: '#FFAB43',
      main: '#FD9009',
      dark: '#E76F00',
      darker: '#D86900',
    },
  },
})

const theme2 = createTheme({
  palette: {
    primary: {
      lighter: '#FD9009',
      light: '#FFAB43',
      main: '#FD9009',
      dark: '#E76F00',
      darker: '#D86900',
    },
    secondary: {
      lighter: '#DFE7EB',
      light: '#D9E1E5',
      main: '#D0D5DD',
      dark: '#C4D2E0',
      darker: '#BAC7D5',
    },
    warning: {
      lighter: '#F2F8FB',
      light: '#118EE5',
      main: '#036DB7',
      dark: '#025996',
      darker: '#003E6A',
    },
  },
})

const themeOptions = [
  { label: 'first', value: theme1 },
  { label: 'second', value: theme2 },
]

// 멀티 테마를 사용하지 않을 때는 아래와 같이 합니다.
// const theme = createTheme({
//   colors: {
//     ...DefaultTheme.colors,
//     primary: { main: 'black', light: 'yellow', dark: 'green', darker: 'blue', lighter: 'white' },
//   },
// })

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <MusmaProvider defaultTheme={theme1} themeOptions={themeOptions}>
      <ToastContextProvider position="top-right" limit={3} newestOnTop>
        <BrowserRouter>
          <Routes>
            <Route element={<Component />} path="" />
            <Route element={<div>여기서도 토스트 팝업이 잘 뜨는지 봐주십쇼</div>} path="toast" />
          </Routes>
        </BrowserRouter>
      </ToastContextProvider>
    </MusmaProvider>,
  )
}
