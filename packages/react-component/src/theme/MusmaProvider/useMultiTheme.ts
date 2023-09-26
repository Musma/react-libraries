import { useState, useMemo, useCallback } from 'react'

import { MusmaTheme } from './MusmaTheme'

export type ThemeObject = { name: string; theme: MusmaTheme }

interface UseStoreParams {
  theme: MusmaTheme
  themeList: ThemeObject[]
}
export const useMultiTheme = ({ theme, themeList }: UseStoreParams) => {
  const [currentTheme, setCurrentTheme] = useState(
    themeList.length === 0 ? 'default' : themeList[0].name,
  )

  const currentThemeObject = useMemo(() => {
    if (themeList.length === 0) {
      return theme
    }
    return themeList.find(({ name }) => name === currentTheme)?.theme || theme
  }, [currentTheme, theme, themeList])

  const handleThemeChange = useCallback((theme?: string) => {
    if (!theme) {
      setCurrentTheme('default')
      return
    }
    setCurrentTheme(theme)
  }, [])

  const themeOptions = useMemo(() => {
    if (themeList.length === 0) {
      return [{ label: 'default', value: 'default' }]
    }
    return themeList.map(({ name }) => ({ label: name, value: name }))
  }, [theme, themeList])

  const value = useMemo(() => {
    return {
      themeOptions,
      currentTheme,
      handleThemeChange,
    }
  }, [currentTheme, themeOptions, handleThemeChange])

  return {
    currentThemeObject,
    value,
  }
}
