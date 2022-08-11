import { useCallback, useMemo } from 'react'
import { Table, usePagination } from 'src/components'

export const TableDemo = () => {
  const data = useMemo(() => {
    return [
      {
        name: 'Peter',
        age: 31,
        city: 'New York',
        job: 'Actor',
      },
      {
        name: 'Jelly',
        age: 32,
        city: 'Florida',
        job: 'Fisherman',
      },
      {
        name: 'Summer',
        age: 30,
        city: 'Busan',
        job: 'Designer',
      },
      {
        name: 'Dyson',
        age: 29,
        city: 'Paris',
        job: 'Cleaner',
      },
      {
        name: 'Jason',
        age: 31,
        city: 'Seoul',
        job: 'Actor',
      },
      {
        name: 'Mac',
        age: 36,
        city: 'L.A',
        job: 'S/W Engineer',
      },
      {
        name: 'Kuhn',
        age: 30,
        city: 'Busan',
        job: 'Dancer',
      },
      {
        name: 'Bob',
        age: 29,
        city: 'Tokyo',
        job: 'Cook',
      },
      {
        name: 'Justin',
        age: 31,
        city: 'New York',
        job: 'Actor',
      },
      {
        name: 'Joe',
        age: 32,
        city: 'Washington',
        job: 'President',
      },
      {
        name: 'Peter',
        age: 31,
        city: 'New York',
        job: 'Actor',
      },
      {
        name: 'Jelly',
        age: 32,
        city: 'Florida',
        job: 'Fisherman',
      },
      {
        name: 'Summer',
        age: 30,
        city: 'Busan',
        job: 'Designer',
      },
      {
        name: 'Dyson',
        age: 29,
        city: 'Paris',
        job: 'Cleaner',
      },
      {
        name: 'Jason',
        age: 31,
        city: 'Seoul',
        job: 'Actor',
      },
      {
        name: 'Mac',
        age: 36,
        city: 'L.A',
        job: 'S/W Engineer',
      },
      {
        name: 'Kuhn',
        age: 30,
        city: 'Busan',
        job: 'Dancer',
      },
      {
        name: 'Bob',
        age: 29,
        city: 'Tokyo',
        job: 'Cook',
      },
      {
        name: 'Justin',
        age: 31,
        city: 'New York',
        job: 'Actor',
      },
      {
        name: 'Joe',
        age: 32,
        city: 'Washington',
        job: 'President',
      },
    ]
  }, [])
  const pagination = usePagination({ totalData: data.length, limit: 5 })

  const getData = useCallback(() => {
    const { page, dataLimit } = pagination
    const start = (page - 1) * dataLimit
    const end = page * dataLimit
    return data.slice(start, end)
  }, [data, pagination])

  return (
    <div>
      width: 500
      <Table
        className="mt-10 w-[500px]"
        data={getData()}
        columns={[
          { id: 'name', label: 'Name' },
          { id: 'age', label: 'Age' },
          { id: 'city', label: 'City' },
          { id: 'job', label: 'Job' },
        ]}
        pagination={pagination}
        onRowClick={(d) => undefined}
      />
    </div>
  )
}
