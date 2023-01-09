import { useState, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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

  const setState = useCallback(
    (value: T) => {
      setHistoryState(() => value)

      navigate('', {
        state: {
          [key]: value,
        },
      })
    },
    [history, historyState, key],
  )

  return [historyState, setState] as const
}
