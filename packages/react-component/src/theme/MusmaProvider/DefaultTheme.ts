/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MusmaTheme } from 'src/theme'
import { Size } from 'src/types'

const breakpoints = {
  sm: 600,
  md: 1440,
  lg: 1920,
}

const spacing = {
  sm: 8,
  md: 16,
  lg: 24,
}

const DefaultTheme: MusmaTheme = {
  colors: {
    primary: {
      lighter: '#F2F8FB',
      light: '#118EE5',
      main: '#036DB7',
      dark: '#025996',
      darker: '#01677D',
    },
    blue: {
      lighter: '#1FA2FF',
      light: '#006CE8',
      main: '#084C9C',
      dark: '#013F6B',
      darker: '#003E6A',
    },
    black: {
      lighter: '#667085',
      light: '#475467',
      main: '#44505C',
      dark: '#242E40',
      darker: '#0E1C31',
    },
    gray: {
      lighter: '#DFE7EB',
      light: '#D9E1E5',
      main: '#D0D5DD',
      dark: '#C4D2E0',
      darker: '#BAC7D5',
    },
    white: {
      lighter: '#F4F6F9',
      light: '#F9FAFB',
      main: '#FFFFFF',
      dark: '#EEEEEE',
      darker: '#EAEAEA',
    },
    red: {
      lighter: '#FF774E',
      light: '#FF440D',
      main: '#E82717',
      dark: '#9C1408',
      darker: '#7A252C',
    },
    green: {
      lighter: '#69C7C6',
      light: '#1BB500',
      main: '#009C45',
      dark: '#00823B',
      darker: '#004F24',
    },
    orange: {
      lighter: '#FFBD4C',
      light: '#FA9F00',
      main: '#F5630C',
      dark: '#DB570B',
      darker: '#C24D0A',
    },
    transparent: 'transparent',
  },
  rounded: {
    sm: 2,
    md: 4,
    lg: 6,
  },
  inputSize: {
    minWidth: 64,
    height: {
      sm: 28,
      md: 32,
      lg: 36,
    },
    fontSize: {
      sm: '0.75rem',
      md: '0.75rem',
      lg: '0.855rem',
    },
  },
  shadow: {
    sm: '0px 4px 4px 4px rgba(0, 0, 0, 0.02)',
    md: '0px 4px 4px 4px rgba(0, 0, 0, 0.05)',
    lg: '0px 4px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  breakpoints,
  mediaQueries: {
    sm: `@media (min-width: ${breakpoints.sm}px)`,
    md: `@media (min-width: ${breakpoints.md}px)`,
    lg: `@media (min-width: ${breakpoints.lg}px)`,
  },
  spacing,
  spacingUtil: (
    arg0: number | Size,
    arg1?: number | Size,
    arg2?: number | Size,
    arg3?: number | Size,
  ) => {
    const convert = (arg: number | Size) => {
      if (typeof arg === 'number') {
        return `${arg}px`
      }
      const size = arg as Size
      return `${spacing[size]}px`
    }

    if (arg3) {
      return `${convert(arg0)} ${convert(arg1!)} ${convert(arg2!)} ${convert(arg3)}`
    }

    if (arg2) {
      return `${convert(arg0)} ${convert(arg1!)} ${convert(arg2)}`
    }

    if (arg1) {
      return `${convert(arg0)} ${convert(arg1)}`
    }

    return `${convert(arg0)}`
  },

  buttonBackgroundColor: 'rgba(0, 0, 0, 0.04)',
  dimmed: {
    sm: 'rgba(0, 0, 0, 0.4)',
    md: 'rgba(0, 0, 0, 0.5)',
    lg: 'rgba(0, 0, 0, 0.6)',
  },
  layoutSize: {
    headerHeight: 48,
    navBarWidth: 226,
    minBodyWidth: 1440,
  },
  zIndex: {
    header: 1000,
    navBar: 1100,
    modal: 1200,
    tooltip: 1300,
    toastPopup: 1400,
  },
}

export { DefaultTheme }
