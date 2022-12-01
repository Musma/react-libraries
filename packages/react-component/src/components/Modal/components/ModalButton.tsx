import { Button, ButtonProps } from 'src/components'
import { Size } from 'src/types'

interface ModalButtonProps extends Omit<ButtonProps, 'size'> {
  /**
   * @optional
   * Modal Size에 따라서 버튼의 크기도 같이 따라갑니다.
   */
  size?: Size
}

/**
 * Modal 하단의 버튼 컴포넌트입니다.
 * ModalActions 컴포넌트를 부모 컴포넌트로 감싸서 사용해주세요
 */
export const ModalButton = ({ size = 'md', fullWidth, ...rest }: ModalButtonProps) => {
  return (
    <Button
      type="button"
      size={
        {
          sm: 'sm',
          md: 'md',
          lg: 'md',
        }[size] as Size
      }
      css={[
        !fullWidth &&
          {
            sm: { width: 144 },
            md: { width: 200 },
            lg: { width: 200 },
          }[size],
      ]}
      {...rest}
    />
  )
}
