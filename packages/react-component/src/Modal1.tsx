import { useToggle } from '@musma/react-utils'

import { Button, Modal, ModalProps } from 'src/components'

import { Modal2 } from './Modal2'

type Modal1Props = Omit<ModalProps, 'title'>

export const Modal1 = (props: Modal1Props) => {
  const [isOpen2, setIsOpen2] = useToggle(false)
  return (
    <Modal title={'1 번째 모달 입니다'} size="lg" {...props}>
      Modal2
      <Button
        onClick={() => {
          setIsOpen2(true)
        }}
      >
        2 모달 열기 aspodkasopdksa
        dkasopdkasopdkaspodkaspodkaspodkaspodkaspodkaspodkaspodkasopdkaspodksapodksapodskaodpkasdopakspo
      </Button>
      {isOpen2 && <Modal2 show={isOpen2} onClose={() => setIsOpen2(false)} />}
    </Modal>
  )
}
