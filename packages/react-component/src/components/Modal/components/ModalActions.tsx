import { HTMLAttributes, useMemo } from 'react'

import { Box } from 'src/elements'
import { Size } from 'src/types'

export interface ModalActionsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @default md
   * 모달 사이즈에 따라 버튼 컨테이너의 패딩이 결정됩니다.
   */
  modalSize?: Size
  /**
   * @optional
   * If true, 내부의 패딩이 사라집니다.
   */
  disablePadding?: boolean
}

/**
 * Modal 하단의 버튼을 만들 때 사용하는 Wrapper Component 입니다.
 */
export const ModalActions = ({ modalSize = 'md', disablePadding, ...rest }: ModalActionsProps) => {
  const padding = useMemo(() => {
    if (disablePadding) {
      return 0
    }

    return {
      sm: 16,
      md: 24,
      lg: 24,
    }[modalSize]
  }, [modalSize, disablePadding])
  return (
    <Box
      css={[
        {
          marginTop: 'auto',
          padding: padding,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        },
      ]}
      {...rest}
    />
  )
}
