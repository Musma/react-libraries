import { useToggle } from '@musma/react-utils'

import { Modal, ModalActions, ModalButton, ModalContent, ModalProps } from '../src/components'
import { ModalTest2 } from './ModalTest2'

type ModalTestProps = ModalProps

/**
 * 사업자 상세
 */
export const ModalTest = ({ ...rest }: ModalTestProps) => {
  const [modal, toggleModal] = useToggle()

  return (
    <Modal {...rest} size="sm">
      <ModalContent size="sm" css={{ textAlign: 'center', padding: 40 }}>
        테스트에요오오오오옹
      </ModalContent>

      <ModalActions size="sm">
        <ModalButton
          variant="contained"
          onClick={() => {
            toggleModal(true)
          }}
        >
          확인
        </ModalButton>
        <ModalButton
          variant="contained"
          size="sm"
          onClick={() => {
            toggleModal(true)
          }}
        >
          확인
        </ModalButton>
      </ModalActions>

      {modal && (
        <ModalTest2
          title="테스트"
          show={modal}
          modalManager={rest.modalManager}
          onClose={() => {
            toggleModal(false)
          }}
        />
      )}
    </Modal>
  )
}
