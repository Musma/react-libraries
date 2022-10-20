import { MusmaTheme } from 'src/theme'

const breakpoints = {
  sm: 600,
  md: 1440,
  lg: 1920,
}

const DefaultTheme: MusmaTheme = {
  colors: {
    blue: {
      lighter: '#F2F8FB',
      light: '#118EE5',
      main: '#036DB7',
      dark: '#025996',
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
      lighter: '#EFE7EB',
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
      lighter: '#EDDDDD',
      light: '#FF4D4F',
      main: '#CA3C3D',
      dark: '#A63132',
      darker: '#940E0F',
    },
    green: {
      lighter: '#E6E8D8',
      light: '#00AA52',
      main: '#107C41',
      dark: '#066B36',
      darker: '#054522',
    },
    orange: {
      lighter: '#FD9009',
      light: '#FFAB43',
      main: '#FD9009',
      dark: '#E76F00',
      darker: '#DB6900',
    },
    transparent: 'transparent',
  },
  rounded: {
    sm: 2,
    md: 4,
    lg: 6,
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
  spacing: {
    sm: 8,
    md: 16,
    lg: 16,
  },
  background: {
    sm: 'rgba(0, 0, 0, 0.02)',
    md: 'rgba(0, 0, 0, 0.02)',
    lg: 'rgba(0, 0, 0, 0.02)',
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
  },
}

export { DefaultTheme }
