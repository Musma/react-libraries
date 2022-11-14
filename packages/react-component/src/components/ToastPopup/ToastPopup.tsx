import { Fragment, useEffect, useMemo } from 'react'

import { useTheme } from '@emotion/react'
import {
  FillCautionIcon,
  FillErrorIcon,
  FillCheckCircleIcon,
  FillInformationIcon,
  OutlineCloseIcon,
} from '@musma/react-icons'

interface IProps {
  height?: string // header의 높이(단위까지 입력하기, 기본 설정은 0px)
  isOpen: boolean
  setIsOpen(open: boolean): void
  state?: 'info' | 'warning' | 'error' | 'success'
  title: string
  description?: string
  mode?: 'light' | 'dark'
}

export const ToastPopup = ({
  height = '0px',
  isOpen,
  setIsOpen,
  state = 'info',
  title,
  description,
  mode = 'light',
}: IProps) => {
  const { color } = useTheme()

  const stylesByState = useMemo(
    () => ({
      info: {
        img: <FillInformationIcon color={color.blue.main} />,
        bgColor: color.gray.light,
        bgDarkColor: '#44505C',
      },
      warning: {
        img: <FillCautionIcon color={color.orange.main} />,
        bgColor: color.orange.lighter,
        bgDarkColor: '#4A4643',
      },
      error: {
        img: <FillErrorIcon color={color.red.main} />,
        bgColor: color.red.lighter,
        bgDarkColor: '#4A4347',
      },
      success: {
        img: <FillCheckCircleIcon color={color.green.main} />,
        bgColor: color.green.lighter,
        bgDarkColor: '#494A43',
      },
    }),
    [
      color.blue.main,
      color.gray.light,
      color.green.lighter,
      color.green.main,
      color.orange.lighter,
      color.orange.main,
      color.red.lighter,
      color.red.main,
    ],
  )

  const stylesByMode = useMemo(
    () => ({
      light: {
        fontColor: 'black',
        bgColor: stylesByState[state].bgColor,
      },
      dark: {
        fontColor: 'white',
        bgColor: stylesByState[state].bgDarkColor,
      },
    }),
    [state, stylesByState],
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false)
    }, 1000 * 3.5)
    return () => clearInterval(timer)
  }, [isOpen, setIsOpen])

  return (
    <div
      css={{
        opacity: isOpen ? 1 : 0,
        position: 'fixed',
        top: isOpen ? `calc(${height} + 16px)` : 0,
        right: 10,
        padding: '12px 16px',
        background: stylesByMode[mode].bgColor,
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.35) ',
        zIndex: 9999,
        borderRadius: '3px',
        transition: 'all 1s',
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: description ? 'normal' : 'center',
          color: stylesByMode[mode].fontColor,
        }}
      >
        {stylesByState[state].img}
        <div css={{ margin: '0 54px 0 10px' }}>
          <span css={{ fontWeight: description ? 'bold' : undefined }}>{title}</span>
          {description && (
            <Fragment>
              <br />
              {description}
            </Fragment>
          )}
        </div>
        <OutlineCloseIcon
          cursor="pointer"
          color={stylesByMode[mode].fontColor}
          onClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  )
}
