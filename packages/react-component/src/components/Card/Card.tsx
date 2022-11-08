import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'
import { Size } from 'src/types'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**

   *
   * @default md
   *
   * @value
   * sm: 8
   * md: 16
   * lg; 24
   */
  rounded?: Size
}

/**
 *
 * @param param0 rounded = 둥글기
 * @description
 * 카드 컴포넌트입니다.
 * 모서리 둥글게 처리 + 외곽선
 */
export const Card = ({ rounded = 'md', ...rest }: CardProps) => {
  const theme = useTheme()
  return (
    <Box
      css={{
        backgroundColor: theme.colors.white.main,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.colors.gray.lighter,
        borderRadius: theme.rounded[rounded],
      }}
      {...rest}
    />
  )
}
