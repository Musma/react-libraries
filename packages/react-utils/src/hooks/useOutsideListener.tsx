import { useEffect } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useOutsideListener = (ref: HTMLElement | null, callback: () => void) => {
  /**
   * Alert if clicked on outside of element
   */

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement
      if (ref && !ref.contains(target)) {
        callback()
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref])
}
