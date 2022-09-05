import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from 'src/App'
import { GlobalStyle } from 'src/styles/GlobalStyle'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <GlobalStyle />
      <App />
    </StrictMode>,
  )
}
