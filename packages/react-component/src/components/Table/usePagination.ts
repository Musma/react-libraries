import { useCallback, useState } from 'react'

import { LimitType } from './types'

export function usePagination() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const onPageChange = useCallback((page: number) => {
    setPage(page)
  }, [])
  const onDataLimitChange = useCallback((limit: LimitType) => {
    setLimit(limit)
  }, [])
  return { page, limit, onPageChange, onDataLimitChange }
}
