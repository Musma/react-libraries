import { Box } from 'src/elements'

import { Table } from './components'

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
  return (
    <Box>
      <Table data={DATA} columns={COLUMNS} />
    </Box>
  )
}
