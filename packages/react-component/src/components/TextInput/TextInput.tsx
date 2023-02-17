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
  ONLY_DIGIT_AND_DASH: 'onlyDigitAndDash',
  ONLY_DIGIT_AND_DOT: 'onlyDigitAndDot',
  ONLY_EMAIL: 'onlyEmail',
  ONLY_ENGLISH: 'onlyEnglish',
  ONLY_ENGLISH_AND_DIGIT: 'onlyEnglishAndDigit',
} as const

type RulesType = (typeof Rules)[keyof typeof Rules]
type InputType = 'text' | 'password'

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * @optional
   * @type {string}
   * @default text
   *
   * 'text' | 'password'
   *
   * @description
   * Input의 타입을 정합니다 'password'가 입력되면, endAdornment가 활성화됩니다
   */
  type?: InputType
  /**
   * @optional
   * @type {string}
   * @default md
   *
   * 'sm' | 'md' | 'lg'
   *
   * @description
   * Input 구성요소들의 사이즈입니다
   */
  size?: Size
  /**
   * @optional
   *
   * @description
   * Input 위에 표시될 라벨입니다
   */
  label?: string
  /**
   * @optional
   * @returns JSX.Element
   *
   * @description
   * Input 시작지점 아이콘 버튼입니다
   */
  startAdornment?: ReactNode | ((props: SVGProps<SVGSVGElement>) => JSX.Element)
  /**
   * @optional
   * @returns JSX.Element
   *
   * @description
   * Input 종료지점 아이콘 버튼입니다
   */
  endAdornment?: ReactNode | ((props: SVGProps<SVGSVGElement>) => JSX.Element)
  /**
   * @optional
   * @type {boolean}
   *
   * false이면, borderColor에 'red'가 적용됩니다
   * || true이면, borderColor에 'gray'가 적용됩니다
   *
   * @description
   * 에러 발생시 borderColor를 불린 값에 따라 변경합니다
   */
  error?: boolean
  /**
   * @optional
   *
   * @description
   * Input 밑에 나타나는 도움 글입니다
   * @description
   * default color는 'green'이며, error props의 값이 true이면, 'red'가 적용됩니다
   */
  helperText?: string
  /**
   * @optional
   * @type {boolean}
   * false이면, 사용하지 않습니다
   * || true이면, label 옆에 *가 표시됩니다
   *
   * @description
   * Input의 label에 표시될 *의 사용여부입니다
   */
  required?: boolean
  /**
   * @optional
   * @type {string}
   *
   * 'onlyDigit' | 'onlyDigitAndDot' | 'onlyEmail' | 'onlyEnglish'
   * | 'onlyEnglishAndDigit'
   *
   * @description
   * 입력하는 값을 rules에 따라 제한합니다
   */
  rules?: RulesType
}

/**
 * @param InputHTMLAttributes(optional)
 * @param type(optional) Input의 타입을 정합니다 'password'가 입력되면, endAdornment가 활성화됩니다
 * @param size(optional) Input 구성요소들의 사이즈입니다
 * @param label(optional) Input 위에 표시될 라벨입니다
 * @param startAdornment(optional) Input 시작지점 아이콘 버튼입니다
 * @param endAdornment(optional) Input 종료지점 아이콘 버튼입니다
 * @param error(optional) 에러 발생시 borderColor를 불린 값에 따라 변경합니다
 * @param helperText(optional) default color는 'green'이며, error props의 값이 true이면, 'red'가 적용됩니다
 * @param required(optional) Input의 label에 표시될 *의 사용여부입니다
 * @param rules(optional) Input에 입력하는 값을 rules에 따라 제한합니다
 * @example
 * <TextInput
 *    label='ID'
 *    rules='onlyEmail'
 *    value={value}
 *    onChange={onChange}
 * />
 *
 * @description
 * Text를 입력할 수 있는 Input입니다
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type = 'text',
      size = 'md',
      label,
      startAdornment,
      endAdornment,
      error = false,
      helperText,
      required,
      rules,
      id,
      disabled = false,
      className,
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

    // Input type 상태 토글
    const toggleType = useCallback(() => {
      setInputType(inputType === 'text' ? 'password' : 'text')
    }, [inputType])

    // TextInput onChange 이벤트
    const handleTextInputChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target

        /**
         * @return {boolean}
         */
        const regExps =
          rules &&
          {
            onlyDigit: RegExps.ONLY_DIGIT.test(value),
            onlyDigitAndDash: RegExps.ONLY_DIGIT_AND_DASH.test(value),
            onlyDigitAndDot: RegExps.ONLY_DIGIT_AND_DOT.test(value),
            onlyEmail: RegExps.ONLY_EMAIL.test(value),
            onlyEnglish: RegExps.ONLY_ENGLISH.test(value),
            onlyEnglishAndDigit: RegExps.ONLY_ENGLISH_AND_DIGIT.test(value),
          }[rules]

        if (onChange) {
          if (rules) {
            regExps && onChange(event)
            return
          }
          onChange(event)
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
            css={[
              // Base CSS
              {
                flex: 1,
                width: '100%',
                height: '100%',
                cursor: 'inherit',
                backgroundColor: 'transparent',
              },
              // Disabled CSS
              disabled && {
                color: theme.colors.gray.main,
                backgroundColor: theme.colors.white.light,
              },
            ]}
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
