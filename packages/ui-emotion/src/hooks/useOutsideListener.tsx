import { useEffect, RefObject, DependencyList } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useOutsideListener = (
  ref: RefObject<HTMLDivElement>,
  action: () => void,
  deps?: DependencyList,
) => {
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
  }, [deps])
}
