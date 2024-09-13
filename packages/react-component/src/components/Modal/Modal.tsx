import { Fragment, useEffect, useMemo } from 'react'

import { useTheme } from '@emotion/react'
import { uniqueId, useEscKeyPress, useSetRef, useOutsideListener } from '@musma/react-utils'

import { Backdrop, ModalTitle } from 'src/components'
import { Box } from 'src/elements'

import { ModalManager, ModalProps } from './helpers'

const modalManager = new ModalManager()

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
  useOutsideListener(
    ref,
    () => {
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
    },
    document.querySelector('#toastPopup-container'),
  )

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
              overflow: 'hidden',
              maxHeight: '80vh',
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
              flex: 1,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
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
