import { useCallback, useState } from 'react'

export interface usePaginationProps {
  limit: number
  page: number
  onPageChange: (page: number) => void
  onDataLimitChange: (dataLimit: number) => void
}

export function usePagination(): usePaginationProps {
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
