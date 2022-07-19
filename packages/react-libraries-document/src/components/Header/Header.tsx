import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'

export const Header = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // https://github.com/pacocoursey/next-themes
  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    return (
      <header className="h-[56px] border-b bg-white dark:bg-slate-600">
        <div className="mx-auto flex h-full items-center justify-between px-10">
          <Link href="/">
            <a>
              <Image
                src="/musma_logo.svg"
                alt="musma_logo"
                width={120}
                height={72}
                className="cursor-pointer"
              />
            </a>
          </Link>
          <div>
            {theme === 'dark' && (
              <button
                className="text-white"
                onClick={() => {
                  setTheme('light')
                }}
              >
                Light
              </button>
            )}

            {theme === 'light' && (
              <button
                className="text-white"
                onClick={() => {
                  setTheme('dark')
                }}
              >
                Dark
              </button>
            )}
          </div>
        </div>
      </header>
    )
  }

  return <Fragment />
}
