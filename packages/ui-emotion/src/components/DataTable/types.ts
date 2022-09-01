export interface PaginationProps {
  dataLimit: LimitType
  page: number
  totalData: number
  onPageChange: (page: number) => void
  onDataLimitChange: (dataLimit: LimitType) => void
}

export type LimitType = 5 | 10 | 15 | 20 | 25
