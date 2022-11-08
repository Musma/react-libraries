import { MusmaProvider, DefaultTheme } from '@musma/react-component'

import { Component } from './Component'

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
      <Component />
    </MusmaProvider>
  )
}
