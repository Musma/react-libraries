import { LabelHTMLAttributes, memo } from 'react'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { Label } from 'src/elements'
import { Size } from 'src/types'

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * @default md
   *
   * @description
   */
  size?: Size
  /**
   * @default md
   *
   * @description
   */
  required?: boolean
}

/**
 *
 * @description
 * Input Element 위에 라벨을 표시나타내는 컴포넌트입니다.
 */
export const InputLabel = memo(
  ({ size = 'md', required = false, children, ...rest }: InputLabelProps) => {
    const theme = useTheme()
    return (
      <Label {...rest}>
        <Typography
          type={size === 'lg' ? 'subTitle1' : 'subTitle2'}
          css={[
            { marginBottom: theme.spacing.sm },
            required && {
              '&:after': {
                color: theme.colors.red.main,
                content: "'*'",
                fontSize: '0.75rem',
                fontWeight: 600,
              },
            },
          ]}
        >
          {children}
        </Typography>
      </Label>
    )
  },
)

InputLabel.displayName = 'InputLabel'
