import { useFormSearch, useToggle } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Box } from 'src/elements'

import { Grid, SearchForm, Table, useModalManager } from './components'
import { Chip } from './components/Chip'
import { Modal1 } from './Modal1'

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
  const modalManager = useModalManager()
  const [isOpen1, setIsOpen1] = useToggle(false)

  return (
    <Box>
      <SearchForm onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
        <Chip color="#dd9c4f">spokdopk</Chip>

        <Chip color="#dd9c4f" size="sm">
          spokdopk
        </Chip>

        <Chip color="#006CE8" size="lg" shape="rounded" variant="outlined">
          spokdopkasdsadas
        </Chip>

        <Chip
          color="#dd9c4f"
          onClick={() => {
            setIsOpen1(true)
          }}
        >
          spokdopk
        </Chip>

        <Grid cols={3} spacing="lg" itemWidth={200}></Grid>
      </SearchForm>

      {isOpen1 && (
        <Modal1 show={isOpen1} modalManager={modalManager} onClose={() => setIsOpen1(false)}>
          Modal1
        </Modal1>
      )}

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
