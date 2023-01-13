import { useCallback, useMemo } from 'react'

import {
  FillCautionIcon,
  FillCheckCircleIcon,
  FillErrorIcon,
  FillInformationIcon,
} from '@musma/react-icons'

import { useMusmaTheme } from 'src/theme'

import { ToastPopupModeType, ToastPopupStateType } from '.'

export const useToastPopupStyle = () => {
  const { colors } = useMusmaTheme()

  const stylesByType = useMemo(
    () => ({
      info: {
        img: <FillInformationIcon color={colors.blue.main} />,
        bgColor: colors.gray.light,
        bgDarkColor: '#44505C',
      },
      warning: {
        img: <FillCautionIcon color={colors.orange.main} />,
        bgColor: colors.orange.lighter,
        bgDarkColor: '#4A4643',
      },
      error: {
        img: <FillErrorIcon color={colors.red.main} />,
        bgColor: colors.red.lighter,
        bgDarkColor: '#4A4347',
      },
      success: {
        img: <FillCheckCircleIcon color={colors.green.main} />,
        bgColor: colors.green.lighter,
        bgDarkColor: '#494A43',
      },
    }),
    [
      colors.blue.main,
      colors.gray.light,
      colors.green.lighter,
      colors.green.main,
      colors.orange.lighter,
      colors.orange.main,
      colors.red.lighter,
      colors.red.main,
    ],
  )

  const returnStyle = useCallback(
    (type: ToastPopupStateType, mode: ToastPopupModeType) => {
      switch (mode) {
        case 'dark':
          return {
            fontColor: 'white',
            ...stylesByType[type],
            bgColor: stylesByType[type].bgDarkColor,
          }
        default:
          return {
            fontColor: 'black',
            ...stylesByType[type],
            bgColor: stylesByType[type].bgColor,
          }
      }
    },
    [stylesByType],
  )

  return {
    returnStyle,
  }
}
