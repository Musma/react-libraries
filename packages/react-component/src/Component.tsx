import { Box } from 'src/elements'

import { Button, Table, usePagination } from './components'

const DATA = [
  {
    id: '0',
    modelName: 'GS100',
  },
]

const COLUMNS = [
  {
    columnLabel: 'id',
    columnName: 'id',
  },
  {
    columnLabel: 'modelName',
    columnName: 'modelName',
  },
]

export const Component = () => {
  const { pagination, setTotalPage } = usePagination()

  return (
    <Box>
      <Button
        onClick={() => {
          setTotalPage(100)
        }}
      >
        테스트
      </Button>
      <Table data={DATA} columns={COLUMNS} pagination={pagination} />
    </Box>
  )
}
