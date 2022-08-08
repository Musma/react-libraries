import { Divider } from './components'

const App = () => {
  return (
    <div className="flex items-center">
      <div className="mx-auto mt-[100px] flex h-[100px] w-[500px] flex-col items-center justify-center border border-black">
        <span>hi</span>
        <Divider />
        <div>contents</div>
      </div>
    </div>
  )
}

export default App
