import { RegExps } from '@musma/react-utils'

import { RulesType } from './types'

export const handleRegExpText = (rules: RulesType, text: string) => {
  const regExps = {
    onlyDigit: RegExps.ONLY_DIGIT.test(text),
    onlyDigitAndDash: RegExps.ONLY_DIGIT_AND_DASH.test(text),
    onlyDigitAndDot: RegExps.ONLY_DIGIT_AND_DOT.test(text),
    onlyDigitAndDotDash: RegExps.ONLY_DIGIT_AND_DOT_DASH.test(text),
    onlyEnglish: RegExps.ONLY_ENGLISH.test(text),
    onlyEnglishAndDash: RegExps.ONLY_ENGLISH_AND_DASH.test(text),
    onlyEnglishAndDot: RegExps.ONLY_ENGLISH_AND_DOT.test(text),
    onlyEnglishAndDotDash: RegExps.ONLY_ENGLISH_AND_DOT_DASH.test(text),
    onlyEnglishAndDigit: RegExps.ONLY_ENGLISH_AND_DIGIT.test(text),
  }[rules]

  return regExps
}
