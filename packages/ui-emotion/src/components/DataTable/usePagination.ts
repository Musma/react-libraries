import { useCallback, useState } from 'react'

interface UsePaginationParams {
  limit?: number
  totalData: number
}
export function usePagination({ limit, totalData }: UsePaginationParams) {
  const [page, setPage] = useState(1)
  const [dataLimit, setDataLimit] = useState(limit || 10)
  const onPageChange = useCallback((page: number) => {
    setPage(page)
  }, [])
  const onDataLimitChange = useCallback((limit: number) => {
    setDataLimit(limit)
  }, [])
  return { page, setPage, dataLimit, onPageChange, onDataLimitChange, totalData }
}
