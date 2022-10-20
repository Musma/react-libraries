import { useMemo } from 'react'

import { useTheme, css } from '@emotion/react'

import { Typography, InputFactory } from 'src/components'
import { Size } from 'src/types'

import { ReactComponent as InvalidIcon } from './images/invalid.svg'
import { ReactComponent as ValidIcon } from './images/valid.svg'

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  type?: 'text' | 'password'
  size?: Size
  label?: string
  helperText?: { type: 'invalid' | 'valid'; message: string }
}

export const TextInput = ({
  size = 'lg',
  label,
  type = 'text',
  helperText,
  className,
  ...rest
}: TextInputProps) => {
  const theme = useTheme()

  const inputBase = useMemo(() => {
    return css({ color: theme.colors.black.dark, backgroundColor: theme.colors.white.main })
  }, [theme])

  const inputBorder = useMemo(() => {
    return {
      base: css({
        border: `1px solid ${theme.colors.gray.darker}`,
        '&:focus': { borderColor: theme.colors.blue.main },
      }),
      helper: {
        valid: css({ border: `1px solid ${theme.colors.green.main}` }),
        invalid: css({ border: `1px solid ${theme.colors.red.main}` }),
      },
    }
  }, [theme])

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
      className={className}
    >
      {label && <Typography type={size === 'lg' ? 'subTitle2' : 'subTitle3'}>{label}</Typography>}

      <InputFactory
        css={[inputBase, helperText ? inputBorder.helper[helperText.type] : inputBorder.base]}
        size={size}
        type={type}
        {...rest}
      />

      {helperText && (
        <div css={{ display: 'flex', alignItems: 'center', columnGap: '4px' }}>
          {helperText.type === 'valid' ? <ValidIcon /> : <InvalidIcon />}
          <Typography
            type="caption2"
            css={{
              color: helperText.type === 'valid' ? theme.colors.green.main : theme.colors.red.main,
            }}
          >
            {helperText.message}
          </Typography>
        </div>
      )}
    </div>
  )
}
