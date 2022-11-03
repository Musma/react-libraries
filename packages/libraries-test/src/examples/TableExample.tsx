import { Fragment, useCallback, useState } from 'react'

import { Button, Table, usePagination } from '@musma/react-component'
import { OutlineAddIcon } from '@musma/react-icons'

const originData = Array.from({ length: 10 }).map((_, index) => ({
  id: `${index}`,
  a: `a${index}`,
  b: `b${index}`,
  c: `c${index}`,
}))

const columns = [
  { columnName: 'a', columnLabel: 'A' },
  { columnName: 'b', columnLabel: 'B' },
  { columnName: 'c', columnLabel: 'C' },
]

export const TableExample = () => {
  const pagination = usePagination()

  const getData = useCallback(() => {
    const { page, limit } = pagination
    const start = (page - 1) * limit
    const end = page * limit
    return originData.slice(start, end)
  }, [pagination])

  const [checkedItems, setCheckedItems] = useState<string[]>([])

  return (
    <Fragment>
      <Table
        columns={columns}
        data={originData}
        withCheckbox={true}
        checkedItems={checkedItems}
        onCheckItemChange={setCheckedItems}
        toolbar={{
          title: '123',
          totalCount: 3,
          children: <Button startIcon={OutlineAddIcon}>asd</Button>,
        }}
        withPagination={true}
      />
    </Fragment>
  )
}
