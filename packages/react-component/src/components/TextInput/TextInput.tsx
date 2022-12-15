import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  SVGProps,
  useCallback,
  useState,
} from 'react'

import { useTheme } from '@emotion/react'
import { OutlineEyeCloseIcon, OutlineEyeIcon } from '@musma/react-icons'

import { IconAdornment, InputHelper, InputLabel } from 'src/components'
import { Box, InputBase } from 'src/elements'
import { Size } from 'src/types'

import { Adornment } from './components'

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * @default text
   */
  type?: 'text' | 'password'
  /**
   * @default md
   */
  size?: Size
  /**
   * @optional
   */
  label?: string
  /**
   *
   * @param props
   * @returns
   */
  startAdornment?: ReactNode | ((props: SVGProps<SVGSVGElement>) => JSX.Element)
  /**
   *
   * @param props
   * @returns
   */
  endAdornment?: ReactNode | ((props: SVGProps<SVGSVGElement>) => JSX.Element)
  /**
   * @optional
   */
  error?: boolean
  /**
   * @optional
   * @description
   */
  helperText?: string
  /**
   * @optional
   * @description
   *
   */
  required?: boolean
  /**
   * @optional
   * @description
   * 정규표현식입니다
   * react-utils 패키지에 있는 RegExps를 넣어서 사용하면 됩니다.
   */
  regExp?: RegExp
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      size = 'md',
      type = 'text',
      helperText,
      id,
      disabled = false,
      error = false,
      startAdornment,
      endAdornment,
      required,
      className,
      regExp,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme()
    const [inputType, setInputType] = useState(type)

    if (type === 'password' && endAdornment) {
      throw new Error('type에 password을 전달했을 시 endAdornment를 넣을 수 없습니다.')
    }

    // type 상태 토글
    const toggleType = useCallback(() => {
      setInputType(inputType === 'text' ? 'password' : 'text')
    }, [inputType])

    // TextInput onChange 이벤트
    const handleTextInputChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          if (regExp) {
            if (regExp.test(event.target.value)) {
              onChange(event)
            }
            return
          }
          onChange(event)
        }
      },
      [onChange, regExp],
    )

    return (
      // Wrapper Box
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          minWidth: theme.inputSize.minWidth,
          position: 'relative',
        }}
        className={className}
      >
        {/* 라벨 */}
        {label && (
          <InputLabel size={size} required={required} htmlFor={id}>
            {label}
          </InputLabel>
        )}

        {/* Input Container */}
        <Box
          css={[
            // Base CSS
            {
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              backgroundColor: theme.colors.white.main,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: error ? theme.colors.red.main : theme.colors.gray.darker,
              borderRadius: theme.rounded.md,
              paddingLeft: theme.spacing.sm,
              paddingRight: theme.spacing.sm,
              overflow: 'hidden',
              fontSize: theme.inputSize.fontSize[size],
              height: theme.inputSize.height[size],
              color: theme.colors.black.dark,
              '&:focus-within': {
                borderColor: error ? theme.colors.red.main : theme.colors.blue.main,
                boxShadow: theme.shadow.md,
              },
            },
            // Disabled CSS
            disabled && {
              cursor: 'not-allowed',
              backgroundColor: theme.colors.white.light,
              borderColor: theme.colors.white.darker,
              color: theme.colors.gray.main,
            },
          ]}
        >
          {/* Start Adornment */}
          <Adornment adornment={startAdornment} direction="start" size={size} />

          {/* Input */}
          <InputBase
            id={id}
            type={inputType}
            ref={ref}
            css={{
              flex: 1,
              height: '100%',
              cursor: 'inherit',
              '&::placeholder': {
                color: theme.colors.gray.light,
              },
            }}
            disabled={disabled}
            onChange={handleTextInputChange}
            {...rest}
          />

          {/* Password Eye */}
          {type === 'password' && (
            <IconAdornment
              disabled={disabled}
              onClick={toggleType}
              css={{
                position: 'absolute',
                right: 4,
                top: 0,
                bottom: 0,
                margin: 'auto 0px',
                cursor: 'inherit',
              }}
            >
              {inputType === 'text' ? (
                <OutlineEyeCloseIcon {...theme.inputSize.iconSize[size]} color="currentColor" />
              ) : (
                <OutlineEyeIcon {...theme.inputSize.iconSize[size]} color="currentColor" />
              )}
            </IconAdornment>
          )}

          {/* End Adornment */}
          {inputType !== 'password' && (
            <Adornment adornment={endAdornment} direction="end" size={size} />
          )}
        </Box>

        {helperText && <InputHelper error={error}>{helperText}</InputHelper>}
      </Box>
    )
  },
)

TextInput.displayName = 'TextInput'
