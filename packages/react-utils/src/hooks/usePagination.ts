import { useEffect, useState } from 'react'

import { useIsMounted } from './useIsMounted'

export interface Pageable {
  page: number
  limit: number
}

interface UsePaginationProps {
  initPageable?: Pageable
  fetchAPI: () => void
}

export const INIT_PAGEABLE = {
  page: 1,
  limit: 10,
}

export const usePagination = ({ initPageable = INIT_PAGEABLE, fetchAPI }: UsePaginationProps) => {
  const isMounted = useIsMounted()
  const [pageable, setPageable] = useState<Pageable>(initPageable)
  const [totalPages, setTotalPages] = useState(0)

  const resetPage = () => setPageable((pageable) => ({ ...pageable, page: 1 }))

  const itemsPerPageOptions = Array.from({ length: 5 }).map((_, index) => {
    const num: number = (index + 1) * initPageable.limit
    return {
      label: num.toString(),
      value: num,
    }
  })

  const pagination = {
    itemsPerPageOptions,
    currentPage: pageable.page,
    itemsPerPage: pageable.limit,
    totalPages: totalPages,
    onPageChange: (page: number) => {
      setPageable((pageable) => ({ ...pageable, page }))
    },
    onItemsPerPageChange: (itemsPerPage: number) => {
      setPageable(() => ({ page: 1, limit: itemsPerPage }))
    },
  }

  // 첫 렌더링 시 fetchAPI 방지
  // pageable이 바뀔때마다 fetchAPI 호출
  useEffect(() => {
    if (isMounted) {
      fetchAPI()
    }
  }, [pageable])

  // 첫 렌더링 시 fetchAPI 호출
  useEffect(() => {
    fetchAPI()
  }, [])

  return { pageable, pagination, resetPage, setPageable, setTotalPages }
}
