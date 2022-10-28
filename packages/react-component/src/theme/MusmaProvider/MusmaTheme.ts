import { Size } from 'src/types'

export interface MusmaTheme {
  colors: {
    /**
     * @default
     * lighter: '#F2F8FB',
     * light: '#118EE5',
     * main: '#036DB7',
     * dark: '#025996',
     * darker: '#003E6A',
     */
    primary: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    /**
     * @default
     * lighter: '#F2F8FB',
     * light: '#118EE5',
     * main: '#036DB7',
     * dark: '#025996',
     * darker: '#003E6A',
     */
    blue: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    /**
     * @default
     * lighter: '#667085',
       light: '#475467',
       main: '#44505C',
       dark: '#242E40',
       darker: '#0E1C31',
     */
    black: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    /**
     * @default
      lighter: '#EFE7EB',
      light: '#D9E1E5',
      main: '#D0D5DD',
      dark: '#C4D2E0',
      darker: '#BAC7D5',
     */
    gray: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    /**
     * @default
      lighter: '#F4F6F9',
      light: '#F9FAFB',
      main: '#FFFFFF',
      dark: '#EEEEEE',
      darker: '#EAEAEA',
     */
    white: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    /**
     * @default
      lighter: '#EDDDDD',
      light: '#FF4D4F',
      main: '#CA3C3D',
      dark: '#A63132',
      darker: '#940E0F',
     */
    red: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    /**
     * @default
      lighter: '#E6E8D8',
      light: '#00AA52',
      main: '#107C41',
      dark: '#066B36',
      darker: '#054522',
     */
    green: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    /**
     * @default
      lighter: '#FD9009',
      light: '#FFAB43',
      main: '#FD9009',
      dark: '#E76F00',
      darker: '#DB6900',
     */
    orange: {
      lighter: string
      light: string
      main: string
      dark: string
      darker: string
    }
    /**
     * @default
     * transparent: 'transparent'
     */
    transparent: string
  }
  /**
   * @default
    sm: 2,
    md: 4,
    lg: 6,
   */
  rounded: Record<Size, number | string>
  /**
   * @default
    sm: 28,
    md: 32,
    lg: 44,
   */
  inputSize: Record<Size, number>
  /**
   * @default
    sm: '0px 4px 4px 4px rgba(0, 0, 0, 0.02)',
    md: '0px 4px 4px 4px rgba(0, 0, 0, 0.05)',
    lg: '0px 4px 4px 4px rgba(0, 0, 0, 0.25)',
   */
  shadow: Record<Size, string>
  /**
   * @default
    sm: 600,
    md: 1440,
    lg: 1920,
   */
  breakpoints: Record<Size, number>
  /**
   * @default
    sm: `@media (min-width: 600px)`,
    md: `@media (min-width: 1440px)`,
    lg: `@media (min-width: 1920px)`,
   */

  mediaQueries: Record<Size, string>
  /**
   * @default
    sm: 8,
    md: 16,
    lg: 24,
   */
  spacing: Record<Size, number>
  /**
   * @default
   * rgba(0, 0, 0, 0.04)
   */
  buttonBackgroundColor: string
  /**
   * @description
   * Dimmed: 어둑한, 흐릿한
   * @default
    sm: 'rgba(0, 0, 0, 0.02)',
    md: 'rgba(0, 0, 0, 0.04)',
    lg: 'rgba(0, 0, 0, 0.06)',
   */
  dimmed: Record<Size, string>
  /**
   * @default
    headerHeight: 48,
    navBarWidth: 226,
    minBodyWidth: 1440,
   */
  layoutSize: {
    headerHeight: number
    navBarWidth: number
    minBodyWidth: number
  }
  /**
   * @default
    header: 1000,
    navBar: 1100,
    modal: 1200,
    tooltip: 1300,
   */
  zIndex: {
    header: number
    navBar: number
    modal: number
    tooltip: number
  }
}
