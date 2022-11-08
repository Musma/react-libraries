import { StrictMode } from 'react'
import { render } from 'react-dom'

import { App } from './App'

const rootElement = document.getElementById('root')

if (rootElement) {
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    rootElement,
  )
}
