import { useTheme } from '@emotion/react'
import { uniqueId, useToggle } from '@musma/react-utils'

import { Button, Chip, IToastPopupData, Modal, ModalProps } from 'src/components'

import { useToastContext } from './components/ToastPopup/ToastPopupContext'
import { Modal2 } from './Modal2'

type Modal1Props = Omit<ModalProps, 'title'>

export const Modal1 = (props: Modal1Props) => {
  const [isOpen2, setIsOpen2] = useToggle(false)
  const theme = useTheme()
  const { addToast } = useToastContext()
  const popupSample1: IToastPopupData = {
    id: uniqueId(),
    title: '에러났다 어쩔래',
    description: '어쩔어쩔어쩔어쩔어쩔',
    mode: 'dark',
    type: 'error',
  }
  const popupSample2: IToastPopupData = {
    id: uniqueId(),
    title: '잘했다임마',
    description: '굿 잘 됨',
    type: 'success',
  }

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
      <Chip
        color={theme.colors.red.main}
        shape="rounded"
        onClick={() => {
          addToast(popupSample1)
        }}
      >
        토스트 팝업 1
      </Chip>
      <Chip
        color={theme.colors.green.main}
        shape="rounded"
        onClick={() => {
          addToast(popupSample2)
        }}
      >
        토스트 팝업 2
      </Chip>
      {isOpen2 && <Modal2 show={isOpen2} onClose={() => setIsOpen2(false)} />}
    </Modal>
  )
}
