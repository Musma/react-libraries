import { FormHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Button, Card, Grid } from 'src/components'
import { Form } from 'src/elements'

interface SearchFormProps extends FormHTMLAttributes<HTMLFormElement> {
  /**
   * @default = '초기화'
   * 리셋 버튼 라벨
   */
  resetLabel?: string
  /**
   * 검색 버튼 비활성화 여부
   */
  disabled?: boolean
  /**
   * @default = '검색'
   * 검색 버튼 라벨
   */
  searchLabel?: string
}

/**
 * 목록을 나타나내는 페이지의 상단 검색 영역 Container로 사용합니다.
 */
export const SearchForm = ({
  resetLabel = '초기화',
  searchLabel = '검색',
  disabled = false,
  children,
  ...rest
}: SearchFormProps) => {
  const theme = useTheme()

  return (
    <Form {...rest}>
      <Card
        css={{
          padding: theme.spacing.lg,
        }}
      >
        {children}

        <Grid
          cols={2}
          spacing="sm"
          itemWidth={200}
          css={{
            justifyContent: 'center',
            marginTop: theme.spacing.lg,
          }}
        >
          {/* Reset 버튼 */}
          <Button type="reset" variant="outlined" fullWidth={true}>
            {resetLabel}
          </Button>

          {/* Submit 버튼 */}
          <Button type="submit" disabled={disabled} fullWidth={true}>
            {searchLabel}
          </Button>
        </Grid>
      </Card>
    </Form>
  )
}
