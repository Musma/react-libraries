import { FillSunIcon, FillMoonIcon } from '@musma/react-icons'
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
      <header className="sticky top-0 z-10 h-14 border-b bg-white dark:bg-slate-600">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-10">
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
          <div className="flex gap-8">
            {(theme === 'dark' || theme === 'system') && (
              <FillSunIcon
                className="cursor-pointer"
                onClick={() => {
                  setTheme('light')
                }}
              />
            )}

            {theme === 'light' && (
              <FillMoonIcon
                className="cursor-pointer"
                onClick={() => {
                  setTheme('dark')
                }}
              />
            )}
          </div>
        </div>
      </header>
    )
  }

  return <Fragment />
}
