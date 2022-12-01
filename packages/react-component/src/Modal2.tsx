import { Modal, ModalProps } from 'src/components'

type Modal2Props = Omit<ModalProps, 'title'>

export const Modal2 = (props: Modal2Props) => {
  return (
    <Modal title={'두 번째 모달 입니다'} size="lg" {...props}>
      Modal2
    </Modal>
  )
}
