import { useCallback, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

interface UseTabProps<T> {
  initTabValue: T
}

export const useTab = <T>({ initTabValue }: UseTabProps<T>) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [tabValue, setTabValue] = useState<T>(() => {
    const tabParams = Object.fromEntries(searchParams.entries()).tab as T

    return tabParams || initTabValue
  })

  const handleTabChange = useCallback((tab: string) => {
    setTabValue(tab as T)
    setSearchParams({
      tab,
    })
  }, [])

  return [tabValue, handleTabChange] as const
}
