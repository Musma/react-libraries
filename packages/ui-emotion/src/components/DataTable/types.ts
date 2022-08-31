export interface PaginationProps {
  dataLimit: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  totalData: number
  onPageChange: (page: number) => void
  onDataLimitChange: (dataLimit: number) => void
}
