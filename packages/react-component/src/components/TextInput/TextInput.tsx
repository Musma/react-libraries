import {
  ChangeEvent,
  FocusEvent,
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
import { handleRegExpText, InputType, RulesType } from './helpers'

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * @default text
   *
   * 입력 필드의 타입을 정합니다 'password'가 입력되면, Password Eye가 활성화됩니다
   */
  type?: InputType
  /**
   * @default md
   *
   * 입력 필드 구성요소들의 사이즈입니다
   */
  size?: Size
  /**
   * 입력 필드 위에 표시될 라벨입니다
   */
  label?: string
  /**
   * 입력 필드 시작지점 아이콘입니다.
   */
  startAdornment?: ReactNode | ((props: SVGProps<SVGSVGElement>) => JSX.Element)
  /**
   * 입력 필드 종료지점 아이콘입니다.
   */
  endAdornment?: ReactNode | ((props: SVGProps<SVGSVGElement>) => JSX.Element)
  /**
   * 1. 값이 false이면, borderColor에 'gray'가 적용됩니다
   * 2. 값이 true이면, borderColor에 'red'가 적용됩니다
   *
   * error의 불린 값에 따라 입력 필드의 borderColor와 helperText의 텍스트 컬러를 제어합니다.
   */
  error?: boolean
  /**
   *
   * 1. error Props의 값이 false이면, 텍스트와 아이콘의 컬러가 'green'으로 적용됩니다.
   * 2. error props의 값이 true이면, 텍스트와 아이콘의 컬러가 'red'로 적용됩니다.
   *
   * 입력 필드 밑에 나타나는 도움 글입니다 error와 같이 사용 됩니다.
   */
  helperText?: string
  /**
   *
   * 1. 값을 입력하지 않으면, *가 표시되지 않습니다.
   * 2. true이면, label 옆에 *가 표시됩니다
   *
   * 입력 필드의 label에 표시될 *의 사용여부입니다
   */
  withAsterisk?: boolean
  /**
   * 입력하는 값을 rules에 따라 제한합니다
   */
  rules?: RulesType
  /**
   * @default
   * false
   *
   * 1. 값이 false이면, 텍스트의 양 사이드에 비어있는 텍스트 값이 제거됩니다.
   * 2. 값이 true이면, 텍스트의 양 사이드에 비어있는 텍스트 값이 제거되지 않습니다.
   *
   * value에 trim() 처리 여부입니다.
   */
  disabledTrim?: boolean
}

/**
 * https://www.developers.musma.net/docs/react-components/textinput
 *
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
      withAsterisk,
      rules,
      id,
      disabled = false,
      className,
      disabledTrim = false,
      onChange,
      onBlur,
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

        if (rules && !handleRegExpText(rules, value)) {
          return
        }

        onChange?.(event)
      },
      [rules, onChange],
    )

    const handleTextInputBlur = useCallback(
      (event: FocusEvent<HTMLInputElement, Element>) => {
        if (!disabledTrim) {
          const trimedValue = event?.target.value.trim()
          event.target.value = trimedValue
          onChange?.(event)
        }
        // Props로 전달받은 onBlur 함수 실행
        onBlur?.(event)
      },
      [disabledTrim, onChange, onBlur],
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
          <InputLabel size={size} withAsterisk={withAsterisk} htmlFor={id}>
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
            onBlur={handleTextInputBlur}
            {...rest}
          />

          {/* Password Eye */}
          {type === 'password' && (
            <IconAdornment
              disabled={disabled}
              onClick={toggleType}
              tabIndex={-1}
              css={{
                position: 'absolute',
                right: 4,
                top: 0,
                bottom: 0,
                margin: 'auto 0px',
              }}
            >
              {inputType === 'text' ? (
                <OutlineEyeIcon {...theme.inputSize.iconSize[size]} color="currentColor" />
              ) : (
                <OutlineEyeCloseIcon {...theme.inputSize.iconSize[size]} color="currentColor" />
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
