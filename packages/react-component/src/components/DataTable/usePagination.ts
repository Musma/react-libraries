import { useCallback, useState } from 'react'
import { LimitType } from './types'

interface UsePaginationParams {
  limit: LimitType
  totalData: number
}

export function usePagination({ limit, totalData }: UsePaginationParams) {
  const [page, setPage] = useState(1)
  const [dataLimit, setDataLimit] = useState(limit || 10)
  const onPageChange = useCallback((page: number) => {
    setPage(page)
  }, [])
  const onDataLimitChange = useCallback((limit: LimitType) => {
    setDataLimit(limit)
  }, [])
  return { page, dataLimit, onPageChange, onDataLimitChange, totalData }
}
