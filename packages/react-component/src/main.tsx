import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createRoot } from 'react-dom/client'

import { MusmaProvider } from 'src/theme'

import Component from './Component'
import { ToastContextProvider } from './components'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <MusmaProvider>
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
