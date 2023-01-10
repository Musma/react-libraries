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

const itemsPerPageOptions = Array.from({ length: 5 }).map((_, index) => {
  const num: number = (index + 1) * 10
  return {
    label: num.toString(),
    value: num,
  }
})

const INIT_PAGEABLE = {
  page: 1,
  limit: 10,
}

export const usePagination = ({ initPageable = INIT_PAGEABLE, fetchAPI }: UsePaginationProps) => {
  const isMounted = useIsMounted()
  const [pageable, setPageable] = useState<Pageable>(initPageable)
  const [totalPages, setTotalPages] = useState(0)

  const resetPage = () => setPageable((pageable) => ({ ...pageable, page: 1 }))

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

  useEffect(() => {
    if (isMounted) {
      fetchAPI()
    }
  }, [pageable])

  return { pageable, pagination, resetPage, setPageable, setTotalPages }
}
