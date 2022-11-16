import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

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
  const { page, limit, ...formValues } = queryParams

  const pageable = useMemo(() => {
    const _page = {
      ...(Number(page) > 1 ? { page: String(page) } : {}),
    }

    const _limit = {
      ...(limit && Number(limit) !== 10 ? { limit: String(limit) } : {}),
    }

    return {
      ..._page,
      ..._limit,
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
      // 데이터에 0 또는 null, undefined 있는 것들은 필터링하여 거른 뒤 객체로 변환합니다.
      const value = Object.fromEntries(Object.entries(data).filter(([, value]) => Boolean(value)))
      // 객체 + 페이지 정보를 합쳐서 Query Parameter에 값 저장
      setSearchParams({ ...value, ...pageable }, { replace: true })
    },
    [pageable, setSearchParams],
  )

  const setPageableQueryParams = useCallback(
    ({ page, limit }: Pageable) => {
      setSearchParams(
        {
          ...formValues, // Form 데이터는 그대로 두고 page와 limit 값에 따라 Query Parameter 수정
          ...(Number(page) > 1 ? { page: String(page) } : {}),
          ...(Number(limit) !== 10 ? { limit: String(limit) } : {}),
        },
        {
          replace: true,
        },
      )
    },
    [formValues, setSearchParams],
  )

  return {
    clearQueryParams,
    setFormDataQueryParams,
    setPageableQueryParams,
    formValues,
    pageValues: {
      page,
      limit,
    },
  }
}
