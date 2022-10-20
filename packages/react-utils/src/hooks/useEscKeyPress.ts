import { useEffect } from 'react'

interface useEscKeyPressProps {
  callback: () => void
}

export const useEscKeyPress = ({ callback }: useEscKeyPressProps) => {
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
