import { Button, ButtonProps } from 'src/components'
import { Size } from 'src/types'

interface ModalButtonProps extends ButtonProps {
  /**
   * @optional
   * Modal Size에 따라서 버튼의 크기도 같이 따라갑니다.
   */
  modalSize?: Size
}

/**
 * Modal 하단의 버튼 컴포넌트입니다.
 * ModalActions 컴포넌트를 부모 컴포넌트로 감싸서 사용해주세요
 */
export const ModalButton = ({ modalSize = 'md', ...rest }: ModalButtonProps) => {
  return (
    <Button
      css={
        {
          sm: { width: 144 },
          md: { width: 200 },
          lg: { width: 200 },
        }[modalSize]
      }
      type="button"
      size={
        {
          sm: 'sm',
          md: 'md',
          lg: 'md',
        }[modalSize] as Size
      }
      {...rest}
    />
  )
}
