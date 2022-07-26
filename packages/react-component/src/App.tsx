import { Tabs } from './components/Tabs'

const App = () => {
  return (
    <div className="h-full w-full">
      <div className="ml-4 mt-4">
        <Tabs titles={['jason', 'jelly', 'summer']} variant="rect" />
      </div>
    </div>
  )
}

export default App
