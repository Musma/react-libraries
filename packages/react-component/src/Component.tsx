import { useTheme } from '@emotion/react'
import { useFormSearch, useToggle } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Box } from 'src/elements'

import { Button, Grid, SearchForm, Table, useModalManager } from './components'
import { ModalTest } from './ModalTest'

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
  const [test, setTest] = useToggle(false)
  const modalManager = useModalManager()

  const [두번쨰, toggle두번째] = useToggle()

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
        <Grid cols={3} spacing="lg" itemWidth={200}>
          <Button
            onClick={() => {
              setTest(true)
            }}
          >
            akak
          </Button>
        </Grid>

        <ModalTest
          title="첫번째"
          show={test}
          modalManager={modalManager}
          onClose={() => {
            setTest(false)
          }}
        />
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
