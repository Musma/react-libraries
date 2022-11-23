import { useEffect } from 'react'

export const useEscKeyPress = (callback: () => void) => {
  useEffect(() => {
    const escKeyModalClose = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        callback()
      }
    }

    window.addEventListener('keydown', escKeyModalClose)
    return () => {
      window.removeEventListener('keydown', escKeyModalClose)
    }
  }, [callback])
}
