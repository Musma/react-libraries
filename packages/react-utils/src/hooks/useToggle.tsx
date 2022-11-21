import { useCallback, useState } from 'react'

// https://prod.velog.io/@jayone1202/Type-Boolean-void-is-not-assignable-to-type-void

/**
 * 토글 상태가 필요할 때 사용합니다.
 *
 * @param initializeState 초기값
 * @returns
 */
export const useToggle = (initializeState = false): [boolean, (state: boolean) => void] => {
  const [state, setState] = useState(initializeState)

  const toggle = useCallback((state: boolean) => {
    setState(state)
  }, [])

  return [state, toggle]
}
