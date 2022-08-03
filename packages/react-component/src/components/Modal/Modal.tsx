import classNames from 'classnames'
import _ from 'lodash-es'
import { Fragment, ReactNode, useCallback, useEffect, useMemo, useRef } from 'react'
import { Button, Typography } from 'src/components'
import { useKeyEsc } from 'src/hooks/useKeyEsc'
import { Size } from 'src/types'

import { ReactComponent as CloseIcon } from './images/close.svg'

export interface ModalProps {
  title: string
  isOpen: boolean
  size?: Extract<Size, 'md' | 'sm'>
  children: ReactNode
  buttonOption: ButtonOption
  isNested?: boolean
  closeOnEscPress?: boolean
  /**
   * 여러개의 모달이 중첩된 경우에 모달 종료 순서를 보장하기 위해 modalManager를 사용합니다
   * useModalManager의 반환값을 전달해주세요
   * Escape keydown 이벤트 발생시 모달을 종료하는 이벤트핸들러를 설치한 경우, 화면상에 보이는 모달(마지막에 켜진 모달)이 아니라 먼저 켜진 순서대로 모달이 종료되는 문제가 있습니다.
   * ModalManager에서 모달들을 관리하며, isTopModal 메서드를 통해 마지막에 켜진 모달인지 확인 후 모달을 종료시킬 수 있도록 구현했습니다.
   *
   */
  modalManager: {
    add: (modal: HTMLDivElement) => void
    pop: () => void
    isTopModal: (modal: HTMLDivElement) => boolean
  }
  onClose: () => void
}
interface ButtonOption {
  label: string
  className?: string
  onClick?: () => void
  secondLabel?: string
  secondClassName?: string
  onSecondClick?: () => void
}

export const Modal = ({
  title,
  isOpen,
  size = 'md',
  buttonOption,
  children,
  isNested,
  closeOnEscPress = false,
  modalManager,
  onClose,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const modalSize = useMemo(() => {
    return {
      md: 'w-[456px] h-[378px]',
      sm: 'w-[328px] h-[202px]',
    }[size]
  }, [size])
  const buttonSize = size === 'md' ? 'lg' : 'md'

  const handleModalClose = useCallback(() => {
    onClose()
    modalManager.pop()
  }, [modalManager, onClose])

  useKeyEsc(() => {
    if (!closeOnEscPress) return
    if (!ref.current) return
    if (!modalManager.isTopModal(ref.current)) return
    handleModalClose()
  })

  useEffect(() => {
    if (!isOpen) return
    if (!ref.current) return
    modalManager.add(ref.current)
  }, [isOpen, modalManager])

  if (!isOpen) {
    return <Fragment />
  }

  return (
    <div
      className={classNames(
        'fixed left-0 right-0 top-0 bottom-0 z-[9999] flex items-center justify-center',
        { ['bg-[rgba(0,0,0,0.3)]']: isNested },
        { ['bg-[rgba(0,0,0,0.6)]']: !isNested },
      )}
      ref={ref}
    >
      <div className={classNames(modalSize, 'flex flex-col rounded-md bg-white')}>
        <section
          className={classNames(
            'flex h-12 items-center justify-between py-[14px] pr-4',
            { 'pl-6': size === 'md' },
            { 'pl-4': size === 'sm' },
          )}
        >
          <Typography type="subTitle" variant="subTitle2">
            {title}
          </Typography>
          <CloseIcon onClick={handleModalClose} className="cursor-pointer" />
        </section>
        <hr className="w-full border-t border-t-[#BAC7D5]" />
        <section className="flex-1">{children}</section>
        <section
          className={classNames(
            'flex items-center justify-center gap-x-2',
            { ['mb-6']: size === 'md' },
            { ['mb-4']: size === 'sm' },
          )}
        >
          <Button
            label={buttonOption.label}
            size={buttonSize}
            variant={buttonOption.secondLabel ? 'outlined' : 'contained'}
            onClick={buttonOption.onSecondClick}
            buttonClassName={buttonOption.className || ''}
          />
          {buttonOption.secondLabel && (
            <Button
              size={buttonSize}
              label={buttonOption.secondLabel}
              onClick={buttonOption.onSecondClick}
              buttonClassName={buttonOption.secondClassName || ''}
            />
          )}
        </section>
      </div>
    </div>
  )
}
