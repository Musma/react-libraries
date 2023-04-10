import { HTMLAttributes, ReactNode } from 'react'

import { Size } from 'src/types'

export interface ModalProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /**
   * @required
   *
   * Modal의 제목입니다.
   */
  title: ReactNode
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

export type NoTitleModalProps = Omit<ModalProps, 'title'>
