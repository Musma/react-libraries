import { Size } from 'src/types'

export interface MusmaTheme {
  colors: {
    blue: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    black: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    gray: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    white: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    red: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    green: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    orange: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    transparent: string
  }
  rounded: Record<Size, number | string>
  shadow: Record<Size, string>
  breakpoints: Record<Size, number>
  mediaQueries: Record<Size, string>
  spacing: Record<Size, number>
  background: Record<Size, string>
  layoutSize: {
    headerHeight: number
    navBarWidth: number
    minBodyWidth: number
  }
  zIndex: {
    header: number
    navBar: number
    modal: number
    tooltip: number
  }
}
