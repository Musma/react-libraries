import { useCallback, useState } from 'react'

export function useModalManager() {
  const [modals, setModals] = useState<HTMLDivElement[]>([])
  const add = useCallback(
    (modal: HTMLDivElement) => {
      if (modals.indexOf(modal) !== -1) {
        return
      }
      setModals([...modals, modal])
    },
    [modals],
  )
  const pop = useCallback(() => {
    const newModals = [...modals]
    newModals.pop()
    setModals(newModals)
  }, [modals])
  const isTopModal = useCallback(
    (modal: HTMLDivElement) => {
      return modals.length > 0 && modals[modals.length - 1] === modal
    },
    [modals],
  )

  return { add, pop, isTopModal }
}
