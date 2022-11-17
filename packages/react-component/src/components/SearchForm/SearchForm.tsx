import { Children, FormHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Button, Card } from 'src/components'
import { Box, Form } from 'src/elements'

interface SearchFormProps extends FormHTMLAttributes<HTMLFormElement> {
  /**
   * @default = '초기화'
   * 리셋 버튼 라벨
   */
  resetLabel?: string
  /**
   * @default = '검색'
   * 검색 버튼 라벨
   */
  searchLabel?: string
  /**
   * @default = 200
   */
  gridItemWidth?: number
}

/**
 * 목록을 나타나내는 페이지의 상단 검색 영역 Container로 사용합니다.
 */
export const SearchForm = ({
  resetLabel = '초기화',
  searchLabel = '검색',
  gridItemWidth = 200,
  children,
  ...rest
}: SearchFormProps) => {
  const theme = useTheme()

  const childrenCount = Children.count(children) // children의 개수

  return (
    <Form {...rest}>
      <Card
        css={{
          padding: theme.spacing.lg,
        }}
      >
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: `repeat(${childrenCount}, ${gridItemWidth}px)`, // Grid Item의 가로 크기는 200px
            justifyContent: 'center',
            gap: theme.spacing.lg,
            marginBottom: theme.spacing.lg,
          }}
        >
          {children}
        </Box>

        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: `repeat(2, 200px)`,
            justifyContent: 'center',
            gap: theme.spacing.lg,
          }}
        >
          <Button type="reset" variant="outlined">
            {resetLabel}
          </Button>
          <Button type="submit">{searchLabel}</Button>
        </Box>
      </Card>
    </Form>
  )
}
