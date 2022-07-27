export interface PaginationProps {
  dataLimit: number
  page: number
  totalData: number
  onPageChange: (page: number) => void
  onDataLimitChange: (dataLimit: number) => void
}
