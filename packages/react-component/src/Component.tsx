import { useEffect } from 'react'

import { Box, Span } from 'src/elements'

import { Button, SearchForm, Table, TextInput } from './components'

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

type TestInput = {
  name: string
}

const defaultValues = {
  name: '',
}

export const Component = () => {
  return (
    <Box>

      <Table data={DATA} columns={COLUMNS} />
    </Box>
  )
}
