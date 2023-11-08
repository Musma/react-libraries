import type { MusmaTheme } from 'src/theme'
import '@emotion/react'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MusmaTheme {
    palette: {
      primary: {
        lighter: string
        light: string
        main: string
        dark: string
        darker: string
      }
      secondary: {
        lighter: string
        light: string
        main: string
        dark: string
        darker: string
      }
      warning: {
        lighter: string
        light: string
        main: string
        dark: string
        darker: string
      }
    }
  }
}
