import { useCallback, useState } from 'react'

interface usePaginationParams {
  limit?: number
  totalData: number
}
export function usePagination({ limit, totalData }: usePaginationParams) {
  const [page, setPage] = useState(1)
  const [dataLimit, setDataLimit] = useState(limit || 10)
  const onPageChange = useCallback((page: number) => {
    setPage(page)
  }, [])
  const onDataLimitChange = useCallback((limit: number) => {
    setDataLimit(limit)
  }, [])
  return { page, dataLimit, onPageChange, onDataLimitChange, totalData }
}
