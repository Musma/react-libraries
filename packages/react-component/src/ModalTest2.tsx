import { Modal, ModalActions, ModalButton, ModalContent, ModalProps } from './components'

type ModalTestProps2 = ModalProps

/**
 * 사업자 상세
 */
export const ModalTest2 = ({ ...rest }: ModalTestProps2) => {
  return (
    <Modal {...rest}>
      <ModalContent size="sm" css={{ textAlign: 'center', padding: 40 }}>
        두번쨰입니다아아아아아
      </ModalContent>

      <ModalActions size="sm">
        <ModalButton variant="contained" size="sm" css={{ width: 144 }}>
          확인
        </ModalButton>
      </ModalActions>
    </Modal>
  )
}
