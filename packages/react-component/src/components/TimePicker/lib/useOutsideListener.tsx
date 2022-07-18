import { useEffect, RefObject } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideListener = (ref: RefObject<HTMLDivElement>, action: () => void) => {
  /**
   * Alert if clicked on outside of element
   */

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLDivElement
      if (ref && ref.current && !ref.current.contains(target)) {
        action()
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useOutsideListener
