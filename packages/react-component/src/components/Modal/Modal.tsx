import { ReactNode, useCallback, useEffect, useRef, CSSProperties, Fragment } from 'react'

import { useTheme } from '@emotion/react'
import { OutlineCloseIcon } from '@musma/react-icons'

import { Button, Typography, IconAdornment, Backdrop, Divider } from 'src/components'
import { Box } from 'src/elements'
import { useKeyEsc, useOutsideListener } from 'src/hooks'
import { Size } from 'src/types'

interface ModalProps {
  title: string
  open: boolean
  size?: Extract<Size, 'md' | 'sm'>
  children?: ReactNode
  buttonOption: {
    label: string
    buttonStyle?: CSSProperties
    onClick?: () => void
    /** secondLabel에 값을 전달하면 두 번째 버튼이 나타납니다  */
    secondLabel?: string
    secondButtonStyle?: CSSProperties
    onSecondClick?: () => void
  }
  className?: string
  /**
   * 모달 외부 클릭했을 때 모달 종료. 한 페이지에 여러 모달이 중첩될 경우 modalManager를 사용해야 정상 작동합니다
   */
  closeOnOutsideClick?: boolean
  /**
   * esc키 눌렀을 때 모달 종료. 한 페이지에 여러 모달이 중첩될 경우 modalManager를 사용해야 정상 작동합니다
   */
  closeOnEscPress?: boolean
  /**
   * useModalManager의 반환값을 전달해주세요
   */
  modalManager?: {
    add: (modal: HTMLDivElement) => void
    pop: () => void
    isTopModal: (modal: HTMLDivElement) => boolean
    isNested: (modal: HTMLDivElement) => boolean
  }
  onClose: () => void
}

export const Modal = ({
  title,
  open,
  size = 'md',
  buttonOption,
  children,
  closeOnEscPress = false,
  closeOnOutsideClick = false,
  className,
  modalManager,
  onClose,
}: ModalProps) => {
  const theme = useTheme()
  const modalRef = useRef<HTMLDivElement>(null)

  const handleModalClose = useCallback(() => {
    onClose()
    modalManager?.pop()
  }, [modalManager, onClose])

  useKeyEsc(() => {
    console.log(`modalRef`)
    console.log(modalRef)
    if (!closeOnEscPress || !modalRef.current) {
      return
    }
    if (modalManager && !modalManager.isTopModal(modalRef.current)) {
      return
    }
    handleModalClose()
  })

  useOutsideListener(
    modalRef,
    () => {
      if (!closeOnOutsideClick || !modalRef.current) {
        return
      }
      if (!modalManager?.isTopModal(modalRef.current)) {
        return
      }
      handleModalClose()
    },
    [modalRef, modalManager],
  )

  useEffect(() => {
    if (!open || !modalRef.current) {
      return
    }

    modalManager?.add(modalRef.current)
  }, [open, modalManager])

  if (open) {
    return (
      <Backdrop>
        <Box
          ref={modalRef}
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
                width: 328,
                height: 202,
              },
              md: {
                width: 456,
                height: 378,
              },
              lg: {
                width: 456,
                height: 378,
              },
            }[size],
          ]}
          className={className}
        >
          <Box
            css={[
              {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
              },
              {
                sm: { padingLeft: theme.spacing.md },
                md: { paddingLeft: theme.spacing.lg },
                lg: { paddingLeft: theme.spacing.lg },
              }[size],
            ]}
          >
            <Typography type="subTitle2">{title}</Typography>

            <IconAdornment onClick={handleModalClose}>
              <OutlineCloseIcon width={16} height={16} color={theme.colors.black.lighter} />
            </IconAdornment>
          </Box>

          <Divider
            css={{
              margin: 0,
              borderTop: `1px solid ${theme.colors.gray.darker}`,
            }}
          />

          <Box
            css={{
              flex: 1,
            }}
          >
            {children}
          </Box>

          <Box
            css={[
              {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                columnGap: theme.spacing.sm,
              },
              {
                sm: { marginBottom: 16 },
                md: { marginBottom: 24 },
                lg: { marginBottom: 24 },
              }[size],
            ]}
          >
            <Button
              size={size === 'md' ? 'lg' : 'md'}
              variant={buttonOption.secondLabel ? 'outlined' : 'contained'}
              onClick={buttonOption.onClick}
              css={[{ sm: { width: 144 }, md: { width: 200 }, lg: { width: 200 } }[size]]}
            >
              {buttonOption.label}
            </Button>

            {buttonOption.secondLabel && (
              <Button
                size={size === 'md' ? 'lg' : 'md'}
                onClick={buttonOption.onSecondClick}
                css={[{ sm: { width: 144 }, md: { width: 200 }, lg: { width: 200 } }[size]]}
              >
                {buttonOption.secondLabel}
              </Button>
            )}
          </Box>
        </Box>
      </Backdrop>
    )
  }

  return <Fragment />
}
