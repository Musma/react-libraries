import { useEffect } from 'react'

import { KeyboardEvents } from 'src/constants'

export const useEscKeyPress = (callback: () => void) => {
  useEffect(() => {
    const escKeyModalClose = (event: KeyboardEvent) => {
      if (event.key === KeyboardEvents.ESCAPE) {
        callback()
      }
    }

    window.addEventListener(KeyboardEvents.KEY_DOWN, escKeyModalClose)
    return () => {
      window.removeEventListener(KeyboardEvents.KEY_DOWN, escKeyModalClose)
    }
  }, [callback])
}
