import { ReactNode } from 'react'

export interface TableData {
  id: string
  [key: string]: ReactNode
}

export interface TableColumn {
  columnName: string
  columnLabel: ReactNode
  columnChild?: { columnName: string; columnLabel: ReactNode }[]
}

export interface ToolbarOption {
  title: string
  totalItems?: number
  children?: ReactNode
}
