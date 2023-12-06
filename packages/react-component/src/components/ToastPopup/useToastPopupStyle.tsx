import { useCallback } from 'react'

import {
  FillCautionIcon,
  FillCheckCircleIcon,
  FillErrorIcon,
  FillInformationIcon,
} from '@musma/react-icons'

import { DefaultTheme } from 'src/theme'

import { ToastPopupModeType, ToastPopupStateType } from '.'

export const useToastPopupStyle = () => {
  const { colors } = DefaultTheme

  const stylesByType = useCallback((type: ToastPopupStateType, mode: ToastPopupModeType) => {
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
            <FillInformationIcon color={mode === 'light' ? colors.blue.main : colors.blue.light} />
          ),
          bgColor: colors.gray.light,
          bgDarkColor: '#44505C',
        }
    }
  }, [])

  const returnStyle = useCallback(
    (type: ToastPopupStateType, mode: ToastPopupModeType) => {
      const { img, bgColor, bgDarkColor } = stylesByType(type, mode)

      switch (mode) {
        case 'dark':
          return {
            fontColor: `${colors.white.main} !important`,
            img,
            bgColor: bgDarkColor,
          }
        default:
          return {
            fontColor: `${colors.black.dark} !important`,
            img,
            bgColor,
          }
      }
    },
    [stylesByType],
  )

  return {
    returnStyle,
  }
}
