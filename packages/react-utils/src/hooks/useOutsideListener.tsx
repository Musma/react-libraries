import { useCallback, useEffect } from 'react'

const MOUSE_UP = 'mouseup'
/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useOutsideListener = (ref: HTMLElement | null, callback: () => void) => {
  /**
   * Alert if clicked on outside of element
   */

  const handleClickOutside = useCallback(
    (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement
      if (ref && !ref.contains(target)) {
        callback()
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
