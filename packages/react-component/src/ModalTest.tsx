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
        첫번째다ㅇ네ㅑㅐ러내야런야ㅔㄹ ㅓㄴㅇ 렁ㄴㅁ럳ㄴ] ㅁㄹ ㄴ런ㅇ 럼ㅇㄴ 럼ㄷ ㄴ런ㅁㅇ
        런야ㅐㅔ러ㅑ냉런야ㅐ런야ㅐㄹ ㄴ어랴ㅔㄴㅇ런애ㅑ런애ㅑ런야ㅐ러ㅐㅑㅁㄴ어
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
          modalId="두번째"
          modalManager={rest.modalManager}
          onClose={() => {
            toggleModal(false)
          }}
        />
      )}
    </Modal>
  )
}
