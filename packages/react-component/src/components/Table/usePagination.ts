import { useCallback, useState } from 'react'

import { UsePaginationType } from './types'

export function usePagination(): UsePaginationType {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)

  const onPageChange = useCallback((page: number) => {
    setPage(page)
  }, [])

  const onDataLimitChange = useCallback((limit: number) => {
    setLimit(limit)
  }, [])

  return { page, limit, onPageChange, onDataLimitChange }
}
