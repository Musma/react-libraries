import { Fragment, HTMLAttributes, useEffect, useMemo } from 'react'

import { useTheme } from '@emotion/react'
import { uniqueId, useEscKeyPress, useOutsideListener, useSetRef } from '@musma/react-utils'

import { Backdrop, ModalTitle } from 'src/components'
import { Box } from 'src/elements'
import { Size } from 'src/types'

class ModalManager {
  private modalIds: string[] = []

  // modalIds로 Set을 만듬
  get modalIdSet() {
    return new Set(this.modalIds)
  }

  // Modal이 componentDidMount 될 때 modalId를 인자로 받아서 넣어놓음
  public add(modalId: string) {
    if (!this.modalIdSet.has(modalId)) {
      this.modalIds = [...this.modalIds, modalId]
    }
  }

  // Modal이 componentWillUnmount 될 때 modalId를 인자로 받아서 지움
  public remove(modalId: string) {
    if (this.modalIdSet.has(modalId)) {
      const newSet = new Set(this.modalIdSet)

      if (newSet.delete(modalId)) {
        const values = Array.from(newSet.values())
        this.modalIds = values
      }
    }
  }

  // 현재 모달이 최상위 모달인지 체크
  public isTopModal(modalId: string) {
    return this.modalIds.length > 0 && this.modalIds[this.modalIds.length - 1] === modalId
  }
}

const modalManager = new ModalManager()

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
   *  sm: {
        maxWidth: 328,
        minHeight: 202,
      },
      md: {
        maxWidth: 456,
        minHeight: 378,
      },
      lg: {
        maxWidth: 944,
        minHeight: 378,
      },
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
   * @required
   *
   * Modal이 닫힐 때 콜백 이벤트
   */
  onClose: () => void
}

export const Modal = ({
  id,
  title,
  show,
  size = 'md',
  disableEscPress = false,
  disableOutsideClick = false,
  children,
  onClose,
  ...rest
}: ModalProps) => {
  const theme = useTheme()

  const modalId = useMemo(() => {
    return id || uniqueId() + ''
  }, [id])

  /**
   * useKeyPress, useOutsideClick에 넣을 ref
   */
  const [ref, setRef] = useSetRef()

  /**
   * 모달 닫기 버튼 클릭 시 이벤트
   */
  // const handleModalClose = useCallback(() => {
  //   onClose()
  // }, [modalManager, onClose])

  useEffect(() => {
    modalManager.add(modalId)

    return () => {
      modalManager.remove(modalId)
    }
  }, [])

  /**
   * 키보드 'ESC'를 눌렀을 때 콜백 Hooks
   */
  useEscKeyPress(() => {
    if (show) {
      if (disableEscPress || !ref) {
        return
      }

      // 여러개 모달이 열려있을 때의 처리
      if (!modalManager.isTopModal(modalId)) {
        return
      }

      onClose()
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

      // 여러개 모달이 열려있을 때의 처리
      if (!modalManager.isTopModal(modalId)) {
        return
      }

      onClose()
    }
  })

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
                maxWidth: 328,
                minHeight: 202,
              },
              md: {
                maxWidth: 456,
                minHeight: 378,
              },
              lg: {
                maxWidth: 944,
                minHeight: 378,
              },
            }[size],
          ]}
          {...rest}
        >
          <ModalTitle size={size} onClose={onClose}>
            {title}
          </ModalTitle>

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
