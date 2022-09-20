import { useMemo } from 'react'

import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { InputFactory } from 'src/components/TextInput/InputFactory'
import { Size } from 'src/styles/theme'

import { ReactComponent as InvalidIcon } from './images/invalid.svg'
import { ReactComponent as ValidIcon } from './images/valid.svg'

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'className'> {
  type?: 'text' | 'password' | 'search'
  size?: Size
  label?: string
  helperText?: { type: 'invalid' | 'valid'; message: string }
  className?: string
  handleSearchClick?: () => void
}

export const TextInput = ({
  size = 'lg',
  label,
  type = 'text',
  helperText,
  className = '',
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
      {label && <Typography type={size === 'lg' ? 'subTitle2' : 'subTitle3'}>{label}</Typography>}
      <InputFactory
        className={cx(
          inputBase,
          helperText ? inputBorder.helper[helperText.type] : inputBorder.base,
          className,
        )}
        size={size}
        type={type}
        {...rest}
      />
      {helperText && (
        <div className={css({ display: 'flex', alignItems: 'center', columnGap: '4px' })}>
          {helperText.type === 'valid' ? <ValidIcon /> : <InvalidIcon />}
          <Typography
            type="caption2"
            className={css({
              color: helperText.type === 'valid' ? theme.color.green.main : theme.color.red.main,
            })}
          >
            {helperText.message}
          </Typography>
        </div>
      )}
    </div>
  )
}

const containerCss = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
})
