import { useCallback, useState } from 'react'

export const useSetRef = (): [HTMLElement | null, (node: HTMLElement | null) => void] => {
  const [ref, _setRef] = useState<HTMLElement | null>(null)

  const setRef = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      _setRef(node)
    }
  }, [])

  return [ref, setRef]
}
