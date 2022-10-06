import { useCallback } from 'react'

import { Table, usePagination } from 'src/components'

const originData = Array.from({ length: 200 }).map((_, index) => ({
  a: `a${index}`,
  b: `b${index}`,
  c: `c${index}`,
}))

export const TableExample = () => {
  const pagination = usePagination()

  const getData = useCallback(() => {
    const { page, limit } = pagination
    const start = (page - 1) * limit
    const end = page * limit
    return originData.slice(start, end)
  }, [pagination])

  return (
    <Table
      css={{ width: '100%' }}
      data={getData()}
      columns={[
        { id: 'a', label: 'A' },
        { id: 'b', label: 'B' },
        { id: 'c', label: 'C' },
      ]}
      totalCount={originData.length}
      pagination={pagination}
    />
  )
}
