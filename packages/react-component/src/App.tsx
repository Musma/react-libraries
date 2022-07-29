import { Button, Tag, useTags } from './components'

const App = () => {
  const swTeam = useTags(['dyson', 'bob', 'kuhn'])
  return (
    <div className="h-full w-full">
      <div className="ml-20 mt-10">
        <header className="sticky top-0 z-10 h-14 border-b bg-white dark:bg-slate-600">
          <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-10">
            header 입니다
          </div>
        </header>
        <div className="bg-gray-500 p-1">
          {swTeam.tags.map((tag) => (
            <Tag key={tag} variant="rectangle" label={tag} onClose={(tag) => swTeam.remove(tag)} />
          ))}
        </div>
        <div>
          {['jason', 'jelly', 'justin'].map((label) => (
            <Button key={label} label={label} onClick={() => swTeam.add(label)} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
