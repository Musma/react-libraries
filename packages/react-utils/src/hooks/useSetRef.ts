import { useCallback, useState } from 'react'

/**
 * ref를 hook이나 component Props로 넘겨야 할 때 사용합니다.
 * useRef로 생성한 ref는 값이 변해도 리렌더링이 되지않기 때문입니다.
 */
export const useSetRef = (): [HTMLElement | null, (node: HTMLElement | null) => void] => {
  const [ref, _setRef] = useState<HTMLElement | null>(null)

  const setRef = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      _setRef(node)
    }
  }, [])

  return [ref, setRef]
}
