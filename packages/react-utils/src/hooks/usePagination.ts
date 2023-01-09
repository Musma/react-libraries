import { useEffect, useState } from 'react'

export interface Pageable {
  page: number
  limit: number
}

interface UsePaginationProps {
  initPageable?: Pageable
  fetchAPI: () => void
}

const rowPerPageOptions = Array.from({ length: 5 }).map((_, index) => {
  const num: number = (index + 1) * 10
  return {
    label: num.toString(),
    value: num,
  }
})

export const usePagination = ({
  initPageable = {
    page: 1,
    limit: 10,
  },
  fetchAPI,
}: UsePaginationProps) => {
  const [mounted, setMounted] = useState(false)

  const [pageable, setPageable] = useState<Pageable>(initPageable)
  const [totalPage, setTotalPage] = useState(0)

  const resetPage = () => setPageable((pageable) => ({ ...pageable, page: 1 }))

  const pagination = {
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

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      fetchAPI()
    }
  }, [pageable])

  return { pageable, pagination, resetPage, setPageable, setTotalPage }
}
