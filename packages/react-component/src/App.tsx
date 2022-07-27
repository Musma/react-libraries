import { Table } from './components'
import { usePagination } from './components/Table/usePagination'

const App = () => {
  const pagination = usePagination({ totalData: 100 })
  return (
    <div className="h-full w-full">
      <div className="m-10">
        <Table
          onRowClick={(data) => console.log(data)}
          pagination={pagination}
          columns={[
            { id: 'name', label: 'Name' },
            { id: 'age', label: 'Age' },
            { id: 'address', label: 'Address' },
            { id: 'titleA', label: 'TitleA' },
            { id: 'titleB', label: 'TitleB' },
            { id: 'titleC', label: 'TitleC' },
          ]}
          data={Array.from({ length: pagination.dataLimit }).map((_, index) => ({
            name: 'Dummy',
            age: 'dummy',
            address: 'dummy',
            titleA: 'a',
            titleB: 'b',
            titleC: 'c',
          }))}
        />
      </div>
    </div>
  )
}

export default App
