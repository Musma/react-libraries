import { useCallback } from 'react'

import { Table, usePagination } from 'src/components'

const originData = Array.from({ length: 200 }).map((_, index) => ({
  a: `a${index}`,
  b: `b${index}`,
  c: `c${index}`,
}))

export const TableExample = () => {
  const pagination = usePagination({ limit: 5, totalData: originData.length })

  const getData = useCallback(() => {
    const { page, dataLimit } = pagination
    const start = (page - 1) * dataLimit
    const end = page * dataLimit
    return originData.slice(start, end)
  }, [pagination])

  return (
    <Table
      data={getData()}
      columns={[
        { id: 'a', label: 'A' },
        { id: 'b', label: 'B' },
        { id: 'c', label: 'C' },
      ]}
      pagination={pagination}
    />
  )
}
