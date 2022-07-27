import { ReactNode } from 'react'

import { Heading } from '../Heading'
import { Pagination } from './Pagination'
import { PaginationProps } from './types'

interface Props {
  data: Data[]
  columns: {
    id: string
    label: string
  }[]
  /**
   * usePagination의 반환값을 전달해주세요
   */
  pagination?: PaginationProps
  onRowClick?: (data: Data) => void
}

type Data = Record<string, string | number | ReactNode>

export const Table = ({ data, columns, pagination, onRowClick }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-y-4">
      <table className="w-full border-collapse rounded border-hidden shadow-[0_0_0_1px_#EFF2F5]">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id} className="h-10 border bg-[#EFF2F5]">
                <Heading element="h6">{column.label}</Heading>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              onClick={onRowClick && (() => onRowClick(item))}
              className="cursor-pointer"
            >
              {columns.map((column) => (
                <td className="h-10 border-b text-center" key={column.id}>
                  {item[column.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {pagination && <Pagination {...pagination} />}
    </div>
  )
}
