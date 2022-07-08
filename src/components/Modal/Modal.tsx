import classNames from 'classnames'
import { Fragment, ReactNode, useMemo } from 'react'

import { ReactComponent as CloseIcon } from './images/close.svg'

import { SubTitle, Button } from 'src/components'
export interface ModalProps {
  title: string
  isOpen: boolean
  size?: 'md' | 'sm'
  children: ReactNode
  buttonOption: ButtonOption
  isNested?: boolean
  onClose: () => void
}
interface ButtonOption {
  label: string
  onClick?: () => void
  secondLabel?: string
  onSecondClick?: () => void
}

export const Modal = ({
  title,
  isOpen = false,
  size = 'md',
  buttonOption,
  children,
  isNested,
  onClose,
}: ModalProps) => {
  const modalSize = useMemo(() => {
    return {
      md: 'w-[456px] h-[378px]',
      sm: 'w-[328px] h-[202px]',
    }[size]
  }, [size])
  const buttonSize = size === 'md' ? 'lg' : 'md'

  if (!isOpen) return <Fragment />
  return (
    <div
      className={classNames(
        'fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center',
        { ['bg-[rgba(0,0,0,0.3)]']: isNested },
        { ['bg-[rgba(0,0,0,0.6)]']: !isNested },
      )}
    >
      <div className={classNames(modalSize, 'flex flex-col rounded-md bg-white')}>
        <section
          className={classNames(
            'flex h-12 items-center justify-between py-[14px] pr-4',
            { 'pl-6': size === 'md' },
            { 'pl-4': size === 'sm' },
          )}
        >
          <SubTitle>{title}</SubTitle>
          <CloseIcon onClick={onClose} className="cursor-pointer" />
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
            onClick={buttonOption.onClick}
          />
          {buttonOption.secondLabel && (
            <Button
              size={buttonSize}
              label={buttonOption.secondLabel}
              onClick={buttonOption.onSecondClick}
            />
          )}
        </section>
      </div>
    </div>
  )
}
