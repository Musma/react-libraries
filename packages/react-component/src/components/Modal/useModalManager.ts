import { useCallback, useState } from 'react'

/**
 *
 * 한 페이지에서 모달을 여러개 사용할 때 사용합니다.
 * Escape keydown 이벤트 발생시 모달을 종료하는 이벤트핸들러를 설치한 경우, 화면상에 보이는 모달(마지막에 켜진 모달)이 아니라 먼저 켜진 순서대로 모달이 종료되는 문제가 있습니다.
 * useModalManager에서 모달들을 관리하며, isTopModal 메서드를 통해 마지막에 켜진 모달인지 확인 후 모달을 종료시킬 수 있도록 구현했습니다.
 */
export interface ModalManager {
  modalIds: string[]
  add: (modalId: string) => void
  pop: () => void
  isTopModal: (modal: string) => boolean
  isNested: (modal: string) => boolean
}

export const useModalManager = (): ModalManager => {
  const [modalIds, setModalIds] = useState<string[]>([])

  const add = useCallback(
    (modalId: string) => {
      if (modalIds.indexOf(modalId) !== -1) {
        return
      }

      setModalIds([...modalIds, modalId])
    },
    [modalIds],
  )

  const pop = useCallback(() => {
    const newModals = [...modalIds]
    newModals.pop()
    setModalIds(newModals)
  }, [modalIds])

  const isTopModal = useCallback(
    (modal: string) => {
      return modalIds.length > 0 && modalIds[modalIds.length - 1] === modal
    },
    [modalIds],
  )

  const isNested = useCallback(
    (modal: string) => {
      return modalIds.indexOf(modal) > 0
    },
    [modalIds],
  )

  return { add, pop, isTopModal, isNested, modalIds }
}
