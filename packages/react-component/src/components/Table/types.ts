export interface UsePaginationType {
  limit: number
  page: number
  onPageChange: (page: number) => void
  onDataLimitChange: (dataLimit: number) => void
}
