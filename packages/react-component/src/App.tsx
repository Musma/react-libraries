import { Breadcrumb, Typography } from './components'

const App = () => {
  return (
    <div className="h-full w-full">
      <div className="ml-20 mt-10">
        <Typography type="body" variant="body1">
          hi
        </Typography>
        <Breadcrumb crumbs={['hi', 'ho', 'ya']} onClick={(c) => console.log(c)} />
      </div>
    </div>
  )
}

export default App
