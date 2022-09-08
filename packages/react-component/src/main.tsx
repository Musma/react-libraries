import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from 'src/App'
import { GlobalStyle } from 'src/styles/GlobalStyle'

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
