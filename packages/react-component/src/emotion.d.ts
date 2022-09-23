import type { EmotionTheme } from './theme/types/index'
import '@emotion/react'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends EmotionTheme {}
}
