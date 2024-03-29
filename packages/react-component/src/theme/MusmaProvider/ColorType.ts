interface DefaultColorSet {
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
      lighter: '#DFE7EB',
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
      main: '#E82717',
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

export interface Palette extends DefaultColorSet {
  [key: string]:
    | {
        lighter: string
        light: string
        main: string
        dark: string
        darker: string
      }
    | string
}
