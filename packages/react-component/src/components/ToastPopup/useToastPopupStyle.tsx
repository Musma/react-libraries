import { useCallback } from 'react'

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

  const stylesByType = useCallback(
    (type: ToastPopupStateType, mode: ToastPopupModeType) => {
      switch (type) {
        case 'error':
          return {
            img: <FillErrorIcon color={colors.red.main} />,
            bgColor: colors.red.lighter,
            bgDarkColor: '#4A4347',
          }
        case 'success':
          return {
            img: <FillCheckCircleIcon color={colors.green.main} />,
            bgColor: colors.green.lighter,
            bgDarkColor: '#494A43',
          }
        case 'warning':
          return {
            img: (
              <FillCautionIcon color={mode === 'light' ? colors.orange.main : colors.orange.dark} />
            ),
            bgColor: colors.orange.lighter,
            bgDarkColor: '#4A4643',
          }
        default:
          return {
            img: (
              <FillInformationIcon
                color={mode === 'light' ? colors.blue.main : colors.blue.light}
              />
            ),
            bgColor: colors.gray.light,
            bgDarkColor: '#44505C',
          }
      }
    },
    [
      colors.red.main,
      colors.red.lighter,
      colors.green.main,
      colors.green.lighter,
      colors.orange.main,
      colors.orange.dark,
      colors.orange.lighter,
      colors.blue.main,
      colors.blue.light,
      colors.gray.light,
    ],
  )

  const returnStyle = useCallback(
    (type: ToastPopupStateType, mode: ToastPopupModeType) => {
      switch (mode) {
        case 'dark':
          return {
            fontColor: 'white',
            ...stylesByType(type, mode),
            bgColor: stylesByType(type, mode).bgDarkColor,
          }
        default:
          return {
            fontColor: 'black',
            ...stylesByType(type, mode),
            bgColor: stylesByType(type, mode).bgColor,
          }
      }
    },
    [stylesByType],
  )

  return {
    returnStyle,
  }
}
