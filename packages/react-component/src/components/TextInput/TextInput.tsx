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
  ...rest
}: TextInputProps) => {
  const theme = useTheme()

  const inputBase = useMemo(() => {
    return css({ color: theme.color.black.dark, backgroundColor: theme.color.white.main })
  }, [theme])

  const inputBorder = useMemo(() => {
    return {
      base: css({
        border: `1px solid ${theme.color.gray.darker}`,
        '&:focus': { borderColor: theme.color.blue.main },
      }),
      helper: {
        valid: css({ border: `1px solid ${theme.color.green.main}` }),
        invalid: css({ border: `1px solid ${theme.color.red.main}` }),
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
              color: helperText.type === 'valid' ? theme.color.green.main : theme.color.red.main,
            }}
          >
            {helperText.message}
          </Typography>
        </div>
      )}
    </div>
  )
}
