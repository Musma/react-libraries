import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * 참고
 * https://dohoons.com/blog/2173/
 */
interface UseLocationStateProps<T> {
  key: string
  initialState: T
}

export const useLocationState = <T>({ key, initialState }: UseLocationStateProps<T>) => {
  const location = useLocation()
  const navigate = useNavigate()
  const stateValue = location.state?.[key] as T

  const [historyState, setHistoryState] = useState(
    stateValue === undefined ? initialState : stateValue,
  )

  const setState = (state: T | ((val: T) => T), replace = false) => {
    const value = state instanceof Function ? state(historyState) : state

    setHistoryState(() => value)

    navigate('', {
      state: replace
        ? {
            ...location.state,
            [key]: value,
          }
        : {
            [key]: value,
          },
    })
  }

  return [historyState, setState] as const
}
