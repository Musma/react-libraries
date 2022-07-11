import { useState } from 'react'

import { Modal, ModalProps, Button, Paragraph } from 'src/components'

export const ModalExample = ({
  title = 'Modal Title',
  ...rest
}: Omit<ModalProps, 'isOpen' | 'onClose' | 'buttonOption'>) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  return (
    <div>
      <Button label={'open modal'} onClick={() => setIsOpen(true)} />
      <Modal
        title={title}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        closeOnEscPress={true}
        buttonOption={{
          label: 'Button',
          onClick: () => undefined,
          secondLabel: 'Button',
          onSecondClick: () => undefined,
        }}
        {...rest}
      >
        <div className="flex h-full w-full flex-col items-center justify-center ">
          <Paragraph className="text-[#667085]">Fisrt Modal</Paragraph>
          <Button label={'Open Second Modal'} onClick={() => setIsOpen2(true)} variant="outlined" />
        </div>
      </Modal>
      <Modal
        title={'Second Modal'}
        isNested={true}
        isOpen={isOpen2}
        onClose={() => setIsOpen2(false)}
        closeOnEscPress={true}
        buttonOption={{
          label: 'Button',
          onClick: () => undefined,
        }}
        {...rest}
      >
        <div className="flex h-full w-full flex-col items-center justify-center ">
          <Paragraph className="text-[#667085]">Second Modal</Paragraph>
          <Button label={'Open Third Modal'} onClick={() => setIsOpen3(true)} variant="outlined" />
        </div>
      </Modal>
      <Modal
        title={'Third Modal'}
        isNested={true}
        isOpen={isOpen3}
        onClose={() => setIsOpen3(false)}
        closeOnEscPress={true}
        buttonOption={{
          label: 'Button',
          onClick: () => undefined,
        }}
        {...rest}
      >
        <Paragraph className="flex h-full w-full items-center justify-center text-[#667085]">
          Third Modal
        </Paragraph>
      </Modal>
    </div>
  )
}
