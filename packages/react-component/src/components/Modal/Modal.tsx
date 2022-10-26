import { useMemo, ReactNode, useCallback, useEffect, useRef, CSSProperties, Fragment } from 'react'

import { css, useTheme } from '@emotion/react'
import { OutlineCloseIcon } from '@musma/react-icons'

import { Button, Typography, IconAdornment, Backdrop } from 'src/components'
import { useKeyEsc, useOutsideListener } from 'src/hooks'
import { Size } from 'src/types'

interface ModalProps {
  title: string
  open: boolean
  size?: Extract<Size, 'md' | 'sm'>
  children: ReactNode
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

const modalCss = {
  size: {
    md: css({
      width: '456px',
      height: '378px',
    }),
    sm: css({
      width: '328px',
      height: '202px',
    }),
  },
}

const headerCss = {
  base: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 16px',
  }),
  size: {
    md: css({ paddingLeft: '24px' }),
    sm: css({ paddingLeft: '16px' }),
  },
}

const buttonCss = {
  container: {
    base: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      columnGap: '8px',
      borderRadius: '6px',
    }),
    size: {
      md: css({
        marginBottom: '24px',
      }),
      sm: css({
        marginBottom: '16px',
      }),
    },
  },
  button: {
    md: css({
      width: '200px',
      height: '32px',
    }),
    sm: css({
      width: '144px',
      height: '28px',
    }),
  },
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
  const backgroundRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const buttonSize = useMemo(() => {
    return size === 'md' ? 'lg' : 'md'
  }, [size])

  // const backgroundColor = useMemo(() => {
  //   if (!backgroundRef.current || !modalManager) {
  //     return 'rgba(0, 0, 0, 0.3)'
  //   }

  //   return modalManager.isNested(backgroundRef.current)
  //     ? 'rgba(0, 0, 0, 0.6)'
  //     : 'rgba(0, 0, 0, 0.3)'
  // }, [modalManager])

  const handleModalClose = useCallback(() => {
    onClose()
    modalManager?.pop()
  }, [modalManager, onClose])

  useKeyEsc(() => {
    if (!closeOnEscPress || !backgroundRef.current) {
      return
    }
    if (modalManager && !modalManager.isTopModal(backgroundRef.current)) {
      return
    }
    handleModalClose()
  })

  useOutsideListener(
    modalRef,
    () => {
      if (!closeOnOutsideClick || !backgroundRef.current) {
        return
      }
      if (!modalManager?.isTopModal(backgroundRef.current)) {
        return
      }
      handleModalClose()
    },
    [modalManager],
  )

  useEffect(() => {
    if (!open || !backgroundRef.current) {
      return
    }

    modalManager?.add(backgroundRef.current)
  }, [open, modalManager])

  if (open) {
    return (
      <Backdrop open={open}>
        <div
          ref={modalRef}
          css={[
            {
              display: 'flex',
              flexDirection: 'column',
              borderRadius: theme.rounded.lg,
              backgroundColor: theme.colors.white.main,
              boxShadow: theme.shadow.lg,
            },
            modalCss.size[size],
          ]}
          className={className}
        >
          <section css={[headerCss.base, headerCss.size[size]]}>
            <Typography type="subTitle2">{title}</Typography>

            <IconAdornment onClick={handleModalClose}>
              <OutlineCloseIcon width={16} height={16} color={theme.colors.black.lighter} />
            </IconAdornment>
          </section>

          <hr
            css={{
              width: '100%',
              margin: 0,
              boxSizing: 'border-box',
              borderTop: `1px solid ${theme.colors.gray.darker}`,
            }}
          />

          <section
            css={{
              flex: '1 1 0',
              fontSize: 14,
              fontWeight: 400,
              color: theme.colors.black.lighter,
            }}
          >
            {children}
          </section>

          <div css={[buttonCss.container.base, buttonCss.container.size[size]]}>
            <Button
              size={buttonSize}
              variant={buttonOption.secondLabel ? 'outlined' : 'contained'}
              onClick={buttonOption.onClick}
              css={{ ...buttonCss.button[size], ...buttonOption.buttonStyle }}
            >
              {buttonOption.label}
            </Button>

            {buttonOption.secondLabel && (
              <Button
                size={buttonSize}
                onClick={buttonOption.onSecondClick}
                css={{ ...buttonCss.button[size], ...buttonOption.secondButtonStyle }}
              >
                {buttonOption.secondLabel}
              </Button>
            )}
          </div>
        </div>
      </Backdrop>
    )
  }

  return <Fragment />
}
