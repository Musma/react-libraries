import { useState } from 'react'

import { Modal, ModalProps, Button, Paragraph } from 'src/components'

export const ModalExample = ({
  title = 'Modal Title',
  ...rest
}: Omit<ModalProps, 'isOpen' | 'onClose' | 'buttonOption'>) => {
  const [isOpen, setIsOpen] = useState(true)
  const [isOpen2, setIsOpen2] = useState(false)
  return (
    <div>
      <Button label={'open modal'} onClick={() => setIsOpen(true)} />
      <Modal
        title={title}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        buttonOption={{
          label: 'Button',
          onClick: () => undefined,
          secondLabel: 'Button',
          onSecondClick: () => undefined,
        }}
        {...rest}
      >
        <div className="flex h-full w-full flex-col items-center justify-center ">
          <Paragraph className="text-[#667085]">Fisrt Mdoal</Paragraph>
          <Button label={'Open Modal2'} onClick={() => setIsOpen2(true)} variant="outlined" />
        </div>
      </Modal>
      <Modal
        title={'Nested Modal'}
        isNested={true}
        isOpen={isOpen2}
        onClose={() => setIsOpen2(false)}
        buttonOption={{
          label: 'Button',
          onClick: () => undefined,
        }}
        {...rest}
      >
        <Paragraph className="flex h-full w-full items-center justify-center text-[#667085]">
          Second Modal
        </Paragraph>
      </Modal>
    </div>
  )
}
