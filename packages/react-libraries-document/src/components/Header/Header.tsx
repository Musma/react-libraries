import { useTheme } from 'next-themes'

export const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <header className="bg-white dark:bg-slate-600 border-b min-h-[56px]">
      <div>
        <button
          className="text-white"
          onClick={() => {
            setTheme('light')
          }}
        >
          Light
        </button>

        <button
          className="text-white"
          onClick={() => {
            setTheme('dark')
          }}
        >
          Dark
        </button>
      </div>
    </header>
  )
}
