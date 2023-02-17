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
import { RegExps } from '@musma/react-utils'

import { IconAdornment, InputHelper, InputLabel } from 'src/components'
import { Box, InputBase } from 'src/elements'
import { Size } from 'src/types'

import { Adornment } from './components'

const Rules = {
  ONLY_DIGIT: 'onlyDigit',
  ONLY_ENGLISH: 'onlyEnglish',
  ONLY_ENGLISH_AND_DIGIT: 'onlyEnglishAndDigit',
  ONLY_DIGIT_AND_DOT: 'onlyDigitAndDot',
  EMAIL: 'email',
  QRCODE: 'qrcode',
} as const

type RulesType = (typeof Rules)[keyof typeof Rules]

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
   * @returns
   */
  startAdornment?: ReactNode | ((props: SVGProps<SVGSVGElement>) => JSX.Element)
  /**
   *
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
   */
  rules?: RulesType
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
      rules,
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
        const { value } = event.target

        const regExps = () => {
          switch (rules) {
            case Rules.ONLY_DIGIT:
              return RegExps.ONLY_DIGIT.test(value)
            case Rules.ONLY_ENGLISH:
              return RegExps.ONLY_ENGLISH.test(value)
            case Rules.ONLY_ENGLISH_AND_DIGIT:
              return RegExps.ONLY_ENGLISH_AND_DIGIT.test(value)
            case Rules.QRCODE:
              return RegExps.QRCODE.test(value)
            case Rules.EMAIL:
              return RegExps.EMAIL.test(value)
            case Rules.ONLY_DIGIT_AND_DOT:
              return RegExps.ONLY_DIGIT_AND_DOT.test(value)
            default:
              return
          }
        }

        if (onChange) {
          regExps() && onChange(event)
        }
      },
      [onChange, rules],
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
              width: '100%',
              height: '100%',
              cursor: 'inherit',
              backgroundColor: 'transparent',
              '&:disabled': {
                color: theme.colors.gray.main,
                backgroundColor: theme.colors.white.light,
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
