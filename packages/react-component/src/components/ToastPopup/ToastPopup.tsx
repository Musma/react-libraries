import { Fragment, useEffect, useMemo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { useTheme } from '@emotion/react'
import {
  FillCautionIcon,
  FillCheckCircleIcon,
  FillErrorIcon,
  FillInformationIcon,
  OutlineCloseIcon,
} from '@musma/react-icons'

import { AUTO_CLOSE_TIME, IToastPopupProps } from './ToastPopupTypes'

export const ToastPopup = ({
  onCloseClick = () => console.log('close 이벤트를 전달해주세요.'),
  type = 'info',
  title = '',
  description,
  mode = 'light',
}: IToastPopupProps) => {
  // 스타일 관련
  const theme = useTheme()

  const stylesByState = useMemo(
    () => ({
      info: {
        img: <FillInformationIcon color={theme.colors.blue.main} />,
        bgColor: theme.colors.gray.light,
        bgDarkColor: '#44505C',
      },
      warning: {
        img: <FillCautionIcon color={theme.colors.orange.main} />,
        bgColor: theme.colors.orange.lighter,
        bgDarkColor: '#4A4643',
      },
      error: {
        img: <FillErrorIcon color={theme.colors.red.main} />,
        bgColor: theme.colors.red.lighter,
        bgDarkColor: '#4A4347',
      },
      success: {
        img: <FillCheckCircleIcon color={theme.colors.green.main} />,
        bgColor: theme.colors.green.lighter,
        bgDarkColor: '#494A43',
      },
    }),
    [
      theme.colors.blue.main,
      theme.colors.gray.light,
      theme.colors.green.lighter,
      theme.colors.green.main,
      theme.colors.orange.lighter,
      theme.colors.orange.main,
      theme.colors.red.lighter,
      theme.colors.red.main,
    ],
  )

  const stylesByMode = useMemo(
    () => ({
      light: {
        fontColor: 'black',
        bgColor: stylesByState[type].bgColor,
      },
      dark: {
        fontColor: 'white',
        bgColor: stylesByState[type].bgDarkColor,
      },
    }),
    [type, stylesByState],
  )

  // 팝업 상태
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // 3초 후에 ToastPopupManager에서 삭제되기
  useEffect(() => {
    setIsOpen(true)
    const timer = setTimeout(() => {
      // unmount 효과를 기대했지만 안된다... 타이밍을 어떻게 넣어야 할지 ㅜㅜ
      setIsOpen(false)
      onCloseClick()
      setIsOpen(false)
    }, AUTO_CLOSE_TIME)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <CSSTransition
      unmountOnExit // 이거 안하면 UnMount 되어도 DOM에 남아있음
      timeout={1000 * 3.5} // 이거 안하면 안없어짐
      in={isOpen}
      classNames="popup"
      css={{
        '&.popup-enter': {
          opacity: 0,
          transform: 'translateY(0px)',
        },
        '&.popup-enter-active': {
          opacity: 1,
          transform: 'translateY(16px)', // 디자인 시스템 가이드 상 header로부터 16px 띄우기
          transition: 'all 1s',
        },
        '&.popup-exit': {
          opacity: 1,
          transform: 'translateY(16px)',
        },
        '&.popup-exit-active': {
          opacity: 0,
          transform: 'translateY(0px)',
          transition: 'all 1s',
        },
        '&.popup-exit-done': {
          opacity: 0,
          transform: 'translateY(0px)',
        },
      }}
    >
      <div
        css={{
          padding: '12px 16px',
          marginBottom: '10px',
          background: stylesByMode[mode].bgColor,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.35) ',
          borderRadius: '3px',
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: description ? 'normal' : 'center',
            color: stylesByMode[mode].fontColor,
          }}
        >
          {stylesByState[type].img}
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
            onClick={onCloseClick}
          />
        </div>
      </div>
    </CSSTransition>
  )
}
