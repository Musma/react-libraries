import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { isEmpty } from 'lodash-es'

import { Pageable } from './usePagination'

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  // Query Params을 객체화
  const queryParams = Object.fromEntries(searchParams.entries())

  /**
   * 예시 데이터)
   * {
   *  page: '2', -> page
   *  limit: '20', -> limit,
   *  ...
   *  name: '무스마',
   *  tel: '01011112222',
   *  ... -> rest
   * }
   */
  const { page, limit, ...queryFormValues } = queryParams

  const queryPageable = useMemo(() => {
    return {
      ...(Number(page) > 1 ? { page: Number(page) } : { page: 1 }),
      ...(isEmpty(limit) && Number(limit) > 10 ? { limit: Number(limit) } : { limit: 10 }),
    }
  }, [page, limit])

  // Clear Query Parameters
  const clearQueryParams = useCallback(() => {
    setSearchParams({}, { replace: true })
  }, [setSearchParams])

  /**
   * Key: Value 형태의 Object 데이터를 Argument로 전달받음
   */
  const setFormDataQueryParams = useCallback(
    (data: Record<string, string>) => {
      const pageable = {
        ...(Number(page) > 1 ? { page: String(page) } : {}),
        ...(isEmpty(limit) && Number(limit) > 10 ? { limit: String(limit) } : {}),
      }

      // 데이터에 0 또는 null, undefined 있는 것들은 필터링하여 거른 뒤 객체로 변환합니다.
      const formValue = Object.fromEntries(
        Object.entries(data).filter(([, value]) => Boolean(value)),
      )
      // 객체 + 페이지 정보를 합쳐서 Query Parameter에 값 저장
      setSearchParams({ ...formValue, ...pageable }, { replace: true })
    },
    [limit, page, setSearchParams],
  )

  const setPageableQueryParams = useCallback(
    ({ page, limit }: Pageable) => {
      setSearchParams(
        {
          ...queryFormValues, // Form 데이터는 그대로 두고 page와 limit 값에 따라 Query Parameter 수정
          ...(Number(page) > 1 ? { page: String(page) } : {}),
          ...(isEmpty(limit) && Number(limit) > 10 ? { limit: String(limit) } : {}),
        },
        {
          replace: true,
        },
      )
    },
    [queryFormValues, setSearchParams],
  )

  return {
    clearQueryParams,
    setFormDataQueryParams,
    setPageableQueryParams,
    queryFormValues,
    queryPageable,
  }
}
