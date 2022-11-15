import { useState } from 'react'

import { PaginationProps } from '../Pagination'

export const usePagination = () => {
  const [pageable, setPageable] = useState({
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

  const pagination: PaginationProps = {
    rowPerPageOptions,
    currentPage: pageable.page,
    rowPerPage: pageable.limit,
    totalPage: totalPage,
    onPageChange: (page: number) => {
      setPageable((pageable) => ({ ...pageable, page }))
    },
    onRowPerPageChange: (rowPerPage: number) => {
      setPageable({ page: 1, limit: rowPerPage })
    },
  }

  return { pageable, pagination, resetPage, setPageable, setTotalPage }
}
