import { Fragment, useEffect, useMemo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { useTheme } from '@emotion/react'
import {
  FillCautionIcon,
  FillErrorIcon,
  FillCheckCircleIcon,
  FillInformationIcon,
  OutlineCloseIcon,
} from '@musma/react-icons'

import { IToastPopupProps } from '.'

export const ToastPopup = ({
  id,
  onCloseClick,
  state = 'info',
  title,
  description,
  mode = 'light',
  ref,
}: IToastPopupProps) => {
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
    setIsOpen(true)

    return () => setIsOpen(false)
  }, [id])

  return (
    <CSSTransition
      key={id}
      in={isOpen}
      classNames="toast-popup"
      timeout={3000}
      nodeRef={ref}
      css={{
        '&.toast-popup-enter': {
          opacity: 0,
          transform: 'translateY(0px)',
        },
        '&.toast-popup-enter-active': {
          opacity: 1,
          transform: 'translateY(10px)',
          transition: 'all 1s',
        },
        '&.toast-popup-enter-done': {
          opacity: 0,
          transform: 'translateY(10px)',
        },
        '&.toast-popup-exit': {
          opacity: 1,
          transform: 'translateY(10px)',
        },
        '&.toast-popup-exit-active': {
          opacity: 0,
          transform: 'translateY(-10px)',
        },
        '&.toast-popup-exit-done': {
          opacity: 0,
          transform: 'translateY(-10px)',
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
        ref={ref}
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
            onClick={onCloseClick}
          />
        </div>
      </div>
    </CSSTransition>
  )
}
