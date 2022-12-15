import { forwardRef, Fragment, useEffect, useMemo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { useTheme } from '@emotion/react'
import {
  FillInformationIcon,
  FillCautionIcon,
  FillErrorIcon,
  FillCheckCircleIcon,
  CloseIcon,
} from '@musma/react-icons'

import { toastPopupManager } from './ToastPopupManager'
import { IToastPopupProps } from './ToastPopupTypes'

export const ToastPopup = forwardRef<HTMLDivElement, IToastPopupProps>(
  ({ id, onCloseClick, state = 'info', title, description, mode = 'light' }, ref) => {
    const theme = useTheme()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    console.log('isOpen', isOpen)

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

    // 3초 후에 ToastPopupManager에서 삭제되기
    useEffect(() => {
      setIsOpen(true)
      const timer = setTimeout(() => {
        setIsOpen(false)
        toastPopupManager.remove({
          id,
          state,
          title,
          description,
          mode,
        })
      }, 1000 * 3.5) // 임의로 1초를 해놨지만, 디자인 가이드 상 3.5초
      return () => {
        setIsOpen(false)
        clearTimeout(timer)
      }
    }, [])

    return (
      <CSSTransition
        timeout={1000 * 3.5}
        in={isOpen}
        classNames="popup"
        nodeRef={ref}
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
            display: 'none',
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

            <CloseIcon
              cursor="pointer"
              color={stylesByMode[mode].fontColor}
              onClick={onCloseClick}
            />
          </div>
        </div>
      </CSSTransition>
    )
  },
)

ToastPopup.displayName = 'ToastPopup'
