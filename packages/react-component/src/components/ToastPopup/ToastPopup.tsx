import { Fragment, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { OutlineCloseIcon } from '@musma/react-icons'

import { useToastPopupStyle, AUTO_CLOSE_TIME, FLOAT_TO_TOP, IToastPopupProps } from '.'

export const ToastPopup = ({
  onCloseClick = () => console.log('close 이벤트를 전달해주세요.'),
  type = 'info',
  title,
  description,
  mode = 'light',
}: IToastPopupProps) => {
  const toastPopupStyle = useToastPopupStyle().returnStyle(type, mode)

  // 팝업 상태
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // 3초 후에 ToastPopupManager에서 삭제되기
  useEffect(() => {
    setIsOpen(true)
    const timer = setTimeout(() => {
      setIsOpen(false)
    }, AUTO_CLOSE_TIME)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <CSSTransition
      unmountOnExit // 이거 안하면 UnMount 되어도 DOM에 남아있음
      timeout={{
        enter: 1000,
        exit: 500,
      }} // 이벤트 상태별로 전환되는 시간 => enter > enter-active > enter-done ... (없으면 동작 안함)
      in={isOpen} // 상태 전환 플래그
      onExited={() => onCloseClick()} // exited 된 후 이벤트
      classNames="popup"
      css={{
        '&.popup-enter': {
          opacity: 0,
          transform: 'translateY(0px)',
        },
        '&.popup-enter-active': {
          opacity: 1,
          transform: `translateY(${FLOAT_TO_TOP})`,
          transition: 'all 1s',
        },
        '&.popup-enter-done': {
          opacity: 1,
          transform: `translateY(${FLOAT_TO_TOP})`, // 디자인 시스템 가이드 상 header로부터 16px 띄우기
        },
        '&.popup-exit': {
          opacity: 1,
          transform: `translateY(${FLOAT_TO_TOP})`,
        },
        '&.popup-exit-active': {
          opacity: 0,
          transform: 'translateY(0px)',
          transition: 'all 0.5s',
        },
        '&.popup-exit-done': {
          opacity: 0,
          transform: 'translateY(0px)',
        },
      }}
    >
      {title ? (
        <div
          css={{
            padding: '12px 16px',
            marginBottom: '10px',
            background: toastPopupStyle.bgColor,
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
              color: toastPopupStyle.fontColor,
            }}
          >
            {toastPopupStyle.img}
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
              color={toastPopupStyle.fontColor}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      ) : (
        <Fragment />
      )}
    </CSSTransition>
  )
}
