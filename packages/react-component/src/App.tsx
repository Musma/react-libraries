import { ImageUploader } from './components'

const App = () => {
  return (
    <div className="h-full w-full">
      <div className="ml-20 mt-10">
        <ImageUploader onChange={(file) => console.log(file)} />
      </div>
    </div>
  )
}

export default App
