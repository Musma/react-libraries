import type { MusmaTheme } from '@musma/react-component'
import '@emotion/react'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MusmaTheme {}
}
