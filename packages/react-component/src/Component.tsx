import { useState } from 'react'
import { Controller } from 'react-hook-form'

import { useTheme } from '@emotion/react'
import { useFormSearch } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Box } from 'src/elements'

import {
  DatePicker,
  Modal,
  ModalActions,
  ModalButton,
  SearchForm,
  Tab,
  TabContainer,
  Table,
  TabPanel,
  Tabs,
} from './components'

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
  const [test, setTest] = useState(false)
  const [date, setDate] = useState<DateTime>(DateTime.local())
  const [tab, setTab] = useState(1)

  const { handleSubmit, onSubmit, onReset, control } = useFormSearch<DDD>({
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
        <Modal
          size="lg"
          show={test}
          onClose={() => {
            setTest(!test)
          }}
          title="1231"
        >
          <ModalActions>
            <ModalButton>aspo[dkasopk]</ModalButton>
            <ModalButton>aspo[dkasopk]</ModalButton>
          </ModalActions>
        </Modal>

        <Controller
          name="date"
          control={control}
          render={({ field: { value, onChange, ...rest } }) => (
            <Box css={{ width: 200 }}>
              <DatePicker
                value={DateTime.fromISO(value)}
                onChange={(dateTime) => {
                  const dd = dateTime.toISO()
                  onChange(dd)
                }}
                {...rest}
              />
            </Box>
          )}
        />
      </SearchForm>

      <TabContainer
        value={tab}
        onTabValueChange={(value) => {
          setTab(value)
        }}
        variant="rect"
      >
        <Tabs>
          <Tab label="one two" value={1} />
          <Tab label="two" value={2} />
          <Tab label="three" value={3} />
        </Tabs>
        <TabPanel value={1}>Item one panel</TabPanel>
        <TabPanel value={2}>Item two panel</TabPanel>
        <TabPanel value={3}>Item three panel</TabPanel>
      </TabContainer>

      <Table
        data={DATA}
        columns={COLUMNS}
        onRowClick={(row) => {
          console.log(row)
        }}
      />
    </Box>
  )
}
