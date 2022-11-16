import { useState } from 'react'

export type Pageable = {
  page: number
  limit: number
}

interface UsePaginationProps {
  fetch: () => void
}

export const usePagination = ({ fetch }: UsePaginationProps) => {
  const [pageable, setPageable] = useState<Pageable>({
    page: 1,
    limit: 10,
  })

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
