import { Theme } from '@emotion/react'
import _ from 'lodash-es'

import { DefaultTheme } from './DefaultTheme'
import { MusmaTheme } from './MusmaTheme'

export const createTheme = (theme: Partial<MusmaTheme> & Omit<Theme, keyof MusmaTheme>): Theme => {
  return _.merge({}, DefaultTheme, theme)
}
