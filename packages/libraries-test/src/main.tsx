import { StrictMode } from 'react'
import { render } from 'react-dom'

import { MusmaProvider } from '@musma/react-component'

import { LayoutTest } from './LayoutTest'

render(
  <StrictMode>
    <MusmaProvider>
      <LayoutTest />
    </MusmaProvider>
  </StrictMode>,
  document.getElementById('root'),
)
