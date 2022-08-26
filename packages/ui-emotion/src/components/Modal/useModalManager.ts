import { useCallback, useState } from 'react'

/**
 *
 * 한 페이지에서 모달을 여러개 사용할 때 사용합니다.
 * Escape keydown 이벤트 발생시 모달을 종료하는 이벤트핸들러를 설치한 경우, 화면상에 보이는 모달(마지막에 켜진 모달)이 아니라 먼저 켜진 순서대로 모달이 종료되는 문제가 있습니다.
 * useModalManager에서 모달들을 관리하며, isTopModal 메서드를 통해 마지막에 켜진 모달인지 확인 후 모달을 종료시킬 수 있도록 구현했습니다.
 */
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
  const isNested = useCallback(
    (modal: HTMLDivElement) => {
      return modals.indexOf(modal) > 0
    },
    [modals],
  )

  return { add, pop, isTopModal, isNested }
}
