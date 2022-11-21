import { useCallback, useEffect, Fragment, HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'
import { useOutsideListener, useEscKeyPress, useSetRef } from '@musma/react-utils'

import { Backdrop, ModalTitle } from 'src/components'
import { Box } from 'src/elements'
import { Size } from 'src/types'

export interface ModalProps extends HTMLAttributes<HTMLElement> {
  /**
   * @required
   *
   * Modal의 제목입니다.
   */
  title: string
  /**
   * @required
   *
   *
   */
  show: boolean
  /**
   * @default md
   *
   *
   */
  size?: Size
  /**
   * 모달 외부 클릭했을 때 모달 종료. 한 페이지에 여러 모달이 중첩될 경우 modalManager를 사용해야 정상 작동합니다
   */
  disableOutsideClick?: boolean
  /**
   * esc키 눌렀을 때 모달 종료. 한 페이지에 여러 모달이 중첩될 경우 modalManager를 사용해야 정상 작동합니다
   */
  disableEscPress?: boolean
  /**
   * useModalManager의 반환값을 전달해주세요
   */
  modalManager?: {
    add: (modal: HTMLElement) => void
    pop: () => void
    isTopModal: (modal: HTMLElement) => boolean
    isNested: (modal: HTMLElement) => boolean
  }
  /**
   * @required
   *
   * Modal이 닫힐 때 콜백 이벤트
   */
  onClose: () => void
}

export const Modal = ({
  title,
  show,
  size = 'md',
  disableEscPress = false,
  disableOutsideClick = false,
  modalManager,
  children,
  onClose,
  ...rest
}: ModalProps) => {
  const theme = useTheme()

  /**
   * useKeyPress, useOutsideClick에 넣을 ref
   */
  const [ref, setRef] = useSetRef()

  /**
   * 모달 닫기 버튼 클릭 시 이벤트
   */
  const handleModalClose = useCallback(() => {
    onClose()
    modalManager?.pop()
  }, [modalManager, onClose])

  /**
   * 키보드 'ESC'를 눌렀을 때 콜백 Hooks
   */
  useEscKeyPress(() => {
    if (show) {
      if (disableEscPress || !ref) {
        return
      }

      // 여러개 모달이 열려있을 때의 처리
      if (modalManager && !modalManager.isTopModal(ref)) {
        return
      }

      handleModalClose()
    }
  })

  /**
   * Modal 영역 이외의 HTMLElement를 클릭했을 경우 콜백 Hooks
   */

  useOutsideListener(ref, () => {
    if (show) {
      if (disableOutsideClick || !ref) {
        return
      }

      if (modalManager && !modalManager.isTopModal(ref)) {
        return
      }
      handleModalClose()
    }
  })

  useEffect(() => {
    if (!show || !ref) {
      return
    }

    modalManager?.add(ref)
  }, [show, modalManager, ref])

  if (show) {
    return (
      <Backdrop>
        <Box
          ref={setRef}
          css={[
            {
              display: 'flex',
              flexDirection: 'column',
              borderRadius: theme.rounded.lg,
              backgroundColor: theme.colors.white.main,
              boxShadow: theme.shadow.lg,
            },
            {
              sm: {
                minWidth: 328,
                minHeight: 202,
              },
              md: {
                minWidth: 456,
                minHeight: 378,
              },
              lg: {
                minWidth: 944,
                minHeight: 378,
              },
            }[size],
          ]}
          {...rest}
        >
          <ModalTitle onClose={onClose}>{title}</ModalTitle>

          <Box
            css={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
            }}
          >
            {children}
          </Box>
        </Box>
      </Backdrop>
    )
  }

  return <Fragment />
}
