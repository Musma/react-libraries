import { Size } from 'src/types'

import { Palette } from './ColorType'

export interface MusmaTheme {
  colors: Palette
  /**
   * @default
    sm: 2,
    md: 4,
    lg: 6,
   */
  rounded: Record<Size, number | string>
  inputSize: {
    /**
     * @default 64
     */
    minWidth: number
    /**
   * @default
    sm: 28,
    md: 32,
    lg: 44,
   */
    height: Record<Size, number>
    /**
    * @default
    sm: 12,
    md: 12,
    lg: 14,
   */
    fontSize: Record<Size, string>
    /**
     * sm: {
     *  width: 14, height: 14
     * }
     * md: {
     *  width: 166, height: 16
     * }
     * lg: {
     *  width: 16, height: 16
     * }
     */
    iconSize: Record<Size, { width: number; height: number }>
  }
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
   *
   */
  spacingUtil: (
    arg0: number | Size,
    arg1?: number | Size,
    arg2?: number | Size,
    arg3?: number | Size,
  ) => string
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
    foldedNavBarWidth: 100,
    minBodyWidth: 1440,
   */
  layoutSize: {
    headerHeight: number
    navBarWidth: number
    foldedNavBarWidth: number
    minBodyWidth: number
  }
  /**
   * @default
    header: 1000,
    navBar: 1100,
    modal: 1200,
    tooltip: 1300,
    toastPopup: 1400,
   */
  zIndex: {
    header: number
    navBar: number
    modal: number
    tooltip: number
    toastPopup: number
  }
}
