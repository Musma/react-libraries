import { useCallback, useEffect } from 'react'

const MOUSE_UP = 'mouseup'
/**
 * Hook that alerts clicks outside of the passed ref
 * @param except outside 클릭 시 제외하고 싶은 node ref (다른 컴포넌트와의 중복 이벤트 회피용)
 */
export const useOutsideListener = (
  ref: HTMLElement | null,
  callback: (event: globalThis.MouseEvent) => void,
  except?: HTMLElement | null | Element,
) => {
  /**
   * Alert if clicked on outside of element
   */

  const handleClickOutside = useCallback(
    (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement
      const excepts = document.querySelectorAll('.outside-click-except')
      if (excepts) {
        for (const value of excepts.values()) {
          if (value.contains(target)) return
        }
      }

      if (ref && !ref.contains(target)) {
        callback(event)
      }
    },
    [callback, ref],
  )

  useEffect(() => {
    // Bind the event listener
    document.addEventListener(MOUSE_UP, handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener(MOUSE_UP, handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleClickOutside])
}
