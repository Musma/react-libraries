import { useMemo, Fragment, ReactNode, useCallback, useEffect, useRef } from 'react'

import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { Button, Typography } from 'src/components'
import { ReactComponent as CloseIcon } from 'src/components/Modal/images/close.svg'
import { useKeyEsc, useOutsideListener } from 'src/hooks'
import { Size } from 'src/styles/theme'

interface ModalProps {
  title: string
  isOpen: boolean
  size?: Extract<Size, 'md' | 'sm'>
  children: ReactNode
  buttonOption: {
    label: string
    className?: string
    onClick?: () => void
    /** secondLabel에 값을 전달하면 두 번째 버튼이 나타납니다  */
    secondLabel?: string
    secondClassName?: string
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
  isOpen,
  size = 'md',
  buttonOption,
  children,
  closeOnEscPress = false,
  closeOnOutsideClick = false,
  className = '',
  modalManager,
  onClose,
}: ModalProps) => {
  const theme = useTheme()
  const backgroundRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const buttonSize = useMemo(() => {
    return size === 'md' ? 'lg' : 'md'
  }, [size])
  const backgroundColor = useMemo(() => {
    if (!backgroundRef.current || !modalManager) {
      return 'rgba(0, 0, 0, 0.3)'
    }
    return modalManager.isNested(backgroundRef.current)
      ? 'rgba(0, 0, 0, 0.6)'
      : 'rgba(0, 0, 0, 0.3)'
  }, [modalManager])

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
    if (!isOpen || !backgroundRef.current) {
      return
    }
    modalManager?.add(backgroundRef.current)
  }, [isOpen, modalManager])

  if (!isOpen) {
    return <Fragment />
  }

  return (
    <div className={cx(backgroundBase, css({ backgroundColor }))} ref={backgroundRef}>
      <div
        ref={modalRef}
        className={cx(
          modalCss.base,
          css({ backgroundColor: theme.color.white.main }),
          modalCss.size[size],
          className,
        )}
      >
        <section className={cx(headerCss.base, headerCss.size[size])}>
          <Typography type="subTitle" variant="subTitle2">
            {title}
          </Typography>
          <CloseIcon onClick={handleModalClose} className={css({ cursor: 'pointer' })} />
        </section>
        <hr
          className={css({
            width: '100%',
            margin: 0,
            borderTop: `1px solid ${theme.color.gray.darker}`,
          })}
        />
        <section className={cx(childrenContainerCss, css({ color: theme.color.black.lighter }))}>
          {children}
        </section>
        <div className={cx(buttonCss.container.base, buttonCss.container.size[size])}>
          <Button
            size={buttonSize}
            variant={buttonOption.secondLabel ? 'outlined' : 'contained'}
            onClick={buttonOption.onSecondClick}
            className={cx(buttonCss.button[size], buttonOption.className)}
          >
            {buttonOption.label}
          </Button>
          {buttonOption.secondLabel && (
            <Button
              size={buttonSize}
              onClick={buttonOption.onSecondClick}
              className={cx(buttonCss.button[size], buttonOption.secondClassName)}
            >
              {buttonOption.secondLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

const childrenContainerCss = css({
  flex: '1 1 0',
  fontSize: '14px',
  fontWeight: 400,
})
const backgroundBase = css({
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const modalCss = {
  base: css({
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '6px',
  }),
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
