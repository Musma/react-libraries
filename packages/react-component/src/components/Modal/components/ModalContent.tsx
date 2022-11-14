import { HTMLAttributes, useMemo } from 'react'

import { Box } from 'src/elements'
import { Size } from 'src/types'

interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
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
 * 버튼 안의 컨텐츠 영역을 만들 때 사용하는 컴포넌트입니다.
 */
export const ModalContent = ({ modalSize = 'md', disablePadding, ...rest }: ModalContentProps) => {
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
  return <Box css={{ flex: 1, padding: padding }} {...rest} />
}
