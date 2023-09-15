import { HTMLAttributes, forwardRef, memo, useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'
import { Size } from 'src/types'

enum AlignItems {
  Start = 'flex-start',
  Center = 'center',
  End = 'flex-end',
  Baseline = 'baseline',
  Stretch = 'stretch',
}

enum JustifyContent {
  Start = 'flex-start',
  Center = 'center',
  End = 'flex-end',
  Between = 'space-between',
}

type FlexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse'

type JustifyContentType = 'start' | 'center' | 'end' | 'between'

type AlignItemsType = 'start' | 'center' | 'end' | 'baseline' | 'stretch'

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Flex Item 간의 간격
   */
  spacing?: Size | number
  /**
   * Flex Item 간의 간격
   */
  rowSpacing?: Size | number
  /**
   * Flex Item 간의 간격
   */
  colSpacing?: Size | number
  /**
   * Flex 컨테이너의 축 변경
   */
  direction?: FlexDirectionType
  /**
   * Flex 컨테이너의 축에 방향에 따라 아이템과의 정렬 방식
   */
  justify?: JustifyContentType
  /**
   * Flex 컨테이너의 축에 방향에 따라 아이템과의 정렬 방식
   */
  align?: AlignItemsType
}

/**
 * CSS Flex를 사용할 때, 사용하는 박스입니다.
 */
export const Flex = memo(
  forwardRef<HTMLDivElement, FlexProps>(
    ({ spacing, rowSpacing, colSpacing, direction = 'row', justify, align, ...rest }, ref) => {
      const theme = useTheme()

      const gap = useMemo(() => {
        if (spacing) {
          if (typeof spacing === 'number') {
            return spacing
          }
          return theme.spacing[spacing]
        }
      }, [spacing])

      const rowGap = useMemo(() => {
        if (rowSpacing) {
          if (typeof rowSpacing === 'number') {
            return rowSpacing
          }
          return theme.spacing[rowSpacing]
        }
      }, [rowSpacing])

      const columnGap = useMemo(() => {
        if (colSpacing) {
          if (typeof colSpacing === 'number') {
            return colSpacing
          }
          return theme.spacing[colSpacing]
        }
      }, [colSpacing])

      const alignItems = useMemo(() => {
        switch (align) {
          case 'start':
            return AlignItems.Start
          case 'center':
            return AlignItems.Center
          case 'end':
            return AlignItems.End
          case 'baseline':
            return AlignItems.Baseline
          case 'stretch':
            return AlignItems.Stretch
          default:
        }
      }, [align])

      const justifyContent = useMemo(() => {
        switch (justify) {
          case 'start':
            return JustifyContent.Start
          case 'center':
            return JustifyContent.Center
          case 'end':
            return JustifyContent.End
          case 'between':
            return JustifyContent.Between
          default:
        }
      }, [justify])

      return (
        <Box
          ref={ref}
          css={{
            display: 'flex',
            gap,
            rowGap,
            columnGap,
            flexDirection: direction,
            justifyContent,
            alignItems,
          }}
          {...rest}
        />
      )
    },
  ),
)

Flex.displayName = 'Flex'
