import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import { MusmaProvider, DefaultTheme, LoadingScreen } from '@musma/react-component'

import { router } from './routes'

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

export const App = () => {
  return (
    <MusmaProvider theme={theme}>
      <Suspense fallback={<LoadingScreen />}>
        <RouterProvider router={router} />
      </Suspense>
    </MusmaProvider>
  )
}
