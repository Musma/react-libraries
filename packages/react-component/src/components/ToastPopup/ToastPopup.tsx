import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { useTheme } from '@emotion/react'
import { CloseIcon } from '@musma/react-icons'

import { Typography } from 'src/components'
import { Box } from 'src/elements'

import { useToastPopupStyle, FLOAT_TO_TOP, IToastPopupProps, AUTO_CLOSE_TIME } from '.'

export const ToastPopup = ({
  onCloseClick = () => console.log('close 이벤트를 전달해주세요.'),
  type = 'info',
  title,
  description,
  mode = 'light',
}: IToastPopupProps) => {
  const theme = useTheme()
  const { bgColor, fontColor, img } = useToastPopupStyle().returnStyle(type, mode)

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
      <Box
        css={{
          padding: '12px 16px',
          marginBottom: theme.spacing.sm,
          background: bgColor,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.35) ',
          borderRadius: theme.rounded.sm,
        }}
      >
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: theme.spacing.sm,
            color: fontColor,
            minWidth: 500,
          }}
        >
          {/* Toast 타입별 아이콘 */}
          {img}

          {/* title + description */}
          <Box
            css={{
              width: '100%',
              padding: '3px 54px 3px 0',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            {title && (
              <Typography
                type="subTitle2"
                css={{
                  // 개행문자(\n)가 있는 경우 줄바꿈하기 위해 적용
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.3,
                }}
              >
                {title}
              </Typography>
            )}

            {description && (
              <Typography
                type="body3"
                css={{
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.3,
                }}
              >
                {description}
              </Typography>
            )}
          </Box>

          <CloseIcon cursor="pointer" color={fontColor} onClick={() => setIsOpen(false)} />
        </Box>
      </Box>
    </CSSTransition>
  )
}
