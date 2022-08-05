import { useCallback, useMemo, useState } from 'react'
import { Button, Modal, Table, usePagination } from './components'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
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
  const dataLimit = 5
  const pagination = usePagination({ totalData: data.length, limit: dataLimit })

  const getData = useCallback(() => {
    const { page, onDataLimitChange } = pagination
    const start = (page - 1) * dataLimit
    const end = page * dataLimit
    return data.slice(start, end)
  }, [data, pagination])
  return (
    <div className="h-full w-full">
      <div className="ml-20 mt-10">
        <header className="sticky top-0 z-10 h-14 border-b bg-white dark:bg-slate-600">
          <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-10">
            header 입니다
          </div>
        </header>
        컴포넌트 테스트를 위한 페이지 입니다
        <Table
          columns={[
            { id: 'name', label: 'Name' },
            { id: 'age', label: 'Age' },
            { id: 'city', label: 'City' },
            { id: 'job', label: 'Job' },
          ]}
          data={getData()}
          pagination={pagination}
        />
      </div>
      <Button label="open" onClick={() => setIsOpen(true)} />
      <Modal
        buttonOption={{ label: 'b' }}
        title="모달"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        contents
      </Modal>
    </div>
  )
}

export default App
