import { useMemo } from 'react'
import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { Size } from 'src/styles/theme'
import { InputFactory } from 'src/components/TextInput/InputFactory'

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'className'> {
  type?: 'text' | 'password' | 'search'
  size?: Size
  label: string
  helperText?: { type: 'invalid' | 'valid'; message: string }
  inputClassName?: string
  handleSearchClick?: () => void
}

export const TextInput = ({
  size = 'lg',
  label,
  type = 'text',
  helperText,
  inputClassName = '',
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
    <div className={containerCss}>
      <Typography type="subTitle" variant={size === 'lg' ? 'subTitle2' : 'subTitle3'}>
        {label}
      </Typography>
      <InputFactory
        className={cx(
          inputBase,
          helperText ? inputBorder.helper[helperText.type] : inputBorder.base,
          inputClassName,
        )}
        size={size}
        type={type}
        {...rest}
      />
    </div>
  )
}

const containerCss = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
})
