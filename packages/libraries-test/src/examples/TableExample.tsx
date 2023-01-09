import { Fragment, useCallback, useState } from 'react'

import { Button, Table } from '@musma/react-component'
import { OutlineAddBoxIcon } from '@musma/react-icons'
import { usePagination } from '@musma/react-utils'

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
  const pagination = usePagination({
    fetchAPI: () => {
      console.log('123123')
    },
  })

  const getData = useCallback(() => {
    const { page, limit } = pagination.pageable
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
        onRowClick={() => alert('Table의 Row를 클릭하셨습니다!')}
        toolbar={{
          title: '123',
          totalCount: 3,
          children: <Button startIcon={OutlineAddBoxIcon}>asd</Button>,
        }}
      />
    </Fragment>
  )
}
