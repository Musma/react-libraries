import type { MusmaTheme } from './theme/types'
import '@emotion/react'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MusmaTheme {}
}
