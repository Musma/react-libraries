import { useState } from 'react'

export interface Pageable {
  page: number
  limit: number
}

interface UsePaginationProps {
  initPageable?: Pageable
  fetch: () => void
}

export const usePagination = ({
  initPageable = {
    page: 1,
    limit: 10,
  },
  fetch,
}: UsePaginationProps) => {
  const [pageable, setPageable] = useState<Pageable>(initPageable)
  const [totalPage, setTotalPage] = useState(0)

  const resetPage = () => setPageable((pageable) => ({ ...pageable, page: 1 }))

  const rowPerPageOptions = Array.from({ length: 5 }).map((_, index) => {
    const num: number = (index + 1) * 10
    return {
      label: num.toString(),
      value: num,
    }
  })

  const pagination = {
    rowPerPageOptions,
    currentPage: pageable.page,
    rowPerPage: pageable.limit,
    totalPage: totalPage,
    onPageChange: (page: number) => {
      setPageable((pageable) => ({ ...pageable, page }))
      fetch()
    },
    onRowPerPageChange: (rowPerPage: number) => {
      setPageable({ page: 1, limit: rowPerPage })
      fetch()
    },
  }

  return { pageable, pagination, resetPage, setPageable, setTotalPage }
}
