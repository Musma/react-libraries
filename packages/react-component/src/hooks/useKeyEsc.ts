import { useEffect } from 'react'

export const useKeyEsc = (callback: () => void) => {
  useEffect(() => {
    const escKeyModalClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callback()
      }
    }

    window.addEventListener('keydown', escKeyModalClose)
    return () => {
      window.removeEventListener('keydown', escKeyModalClose)
    }
  }, [callback])
}
