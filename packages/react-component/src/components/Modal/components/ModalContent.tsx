import { HTMLAttributes, useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'
import { Size } from 'src/types'

interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @default md
   * 모달 사이즈에 따라 버튼 컨테이너의 패딩이 결정됩니다.
   */
  size?: Size
  /**
   * @optional
   * If true, 내부의 패딩이 사라집니다.
   */
  disablePadding?: boolean
  /**
   * @optional
   * true이면 bottom padding을 제거합니다.
   */
  disablePaddingBottom?: boolean
}

/**
 * 버튼 안의 컨텐츠 영역을 만들 때 사용하는 컴포넌트입니다.
 */
export const ModalContent = ({
  size = 'md',
  disablePadding,
  disablePaddingBottom,
  ...rest
}: ModalContentProps) => {
  const theme = useTheme()

  const padding = useMemo(() => {
    if (disablePadding) {
      return 0
    }

    return {
      sm: theme.spacing.md,
      md: theme.spacing.lg,
      lg: theme.spacing.lg,
    }[size]
  }, [disablePadding, theme.spacing.md, theme.spacing.lg, size])

  return (
    <Box
      css={[
        {
          flex: 1,
          overflowY: 'auto',
          padding: padding,
        },
        disablePaddingBottom && {
          paddingBottom: 0,
        },
      ]}
      {...rest}
    />
  )
}
