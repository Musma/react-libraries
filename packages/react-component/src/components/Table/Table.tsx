import classNames from 'classnames'
import { ReactNode } from 'react'

import { Typography } from '../Typography'
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
      <table className="w-full border-collapse rounded border-hidden shadow-[0_0_0_1px_#D0D5DD]">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                className="h-10 border border-[#D0D5DD] bg-[#EFF2F5] first:rounded-tl last:rounded-tr"
              >
                <Typography type="heading" variant="h6">
                  {column.label}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              onClick={onRowClick && (() => onRowClick(item))}
              className={classNames({ 'cursor-pointer hover:bg-[#F2F8FB]': onRowClick })}
            >
              {columns.map((column) => (
                <td className="h-10 border-b border-b-[#D0D5DD] text-center" key={column.id}>
                  <Typography type="body" variant="body2" className="text-center">
                    {item[column.id]}
                  </Typography>
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
