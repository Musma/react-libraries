import { useTheme } from '@emotion/react'
import { useFormSearch } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Box } from 'src/elements'

import { Grid, SearchForm, Table } from './components'

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

type DDD = {
  date: string
}

export const Component = () => {
  const theme = useTheme()

  const { handleSubmit, onSubmit, onReset } = useFormSearch<DDD>({
    useFormProps: {
      defaultValues: {
        date: DateTime.local().toISO(),
      },
    },
    fetchAPI() {
      console.log(';fetchposdkdspokpo')
    },
  })

  return (
    <Box>
      <SearchForm onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
        <Grid cols={3} spacing="lg" itemWidth={200}></Grid>
      </SearchForm>

      <Table
        data={DATA}
        columns={COLUMNS}
        withCheckbox={true}
        onRowClick={(row) => {
          alert('12312321')
        }}
      />
    </Box>
  )
}
