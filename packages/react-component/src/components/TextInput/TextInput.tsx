import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  SVGProps,
  useCallback,
  useState,
} from 'react'

import { useTheme } from '@emotion/react'
import { OutlineEyeCloseIcon, OutlineEyeIcon } from '@musma/react-icons'

import { IconAdornment, InputHelper, InputLabel } from 'src/components'
import { Box, InputBase } from 'src/elements'
import { Size } from 'src/types'

const iconSize = {
  width: 16,
  height: 16,
}

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
   * @optional
   * @description
   * TextInput 앞에 나타날 장식품
   */
  startAdornment?: (props: SVGProps<SVGSVGElement>) => JSX.Element
  /**
   * @optional
   */
  endAdornment?: (props: SVGProps<SVGSVGElement>) => JSX.Element
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
      startAdornment: StartAdornment,
      endAdornment: EndAdornment,
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

    if (type === 'password' && EndAdornment) {
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
              position: 'relative',
              color: disabled ? theme.colors.gray.main : theme.colors.black.dark,
            },
          ]}
        >
          {/* Start Adornment */}
          {StartAdornment && (
            <StartAdornment
              {...iconSize}
              color="currentColor"
              css={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                margin: 'auto 0',
                left: theme.spacing.sm,
              }}
            />
          )}

          {/* Input */}
          <InputBase
            id={id}
            type={inputType}
            ref={ref}
            css={{
              flex: 1,
              backgroundColor: theme.colors.white.main,
              fontSize: theme.inputSize.fontSize[size],
              height: theme.inputSize.height[size],
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: theme.rounded.md,
              borderColor: error ? theme.colors.red.main : theme.colors.gray.darker,
              paddingLeft: StartAdornment ? 32 : theme.spacing.sm,
              paddingRight: EndAdornment || inputType === 'password' ? 32 : theme.spacing.sm,
              '&:focus': {
                borderColor: error ? theme.colors.red.main : theme.colors.blue.main,
                boxShadow: theme.shadow.md,
              },
              '&:disabled': {
                borderColor: theme.colors.gray.main,
                backgroundColor: theme.colors.white.light,
                cursor: 'not-allowed',
              },
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
                <OutlineEyeCloseIcon {...iconSize} color="currentColor" />
              ) : (
                <OutlineEyeIcon {...iconSize} color="currentColor" />
              )}
            </IconAdornment>
          )}

          {/* End Adornment */}
          {inputType !== 'password' && EndAdornment && (
            <EndAdornment
              {...iconSize}
              color="currentColor"
              css={{
                position: 'absolute',
                right: theme.spacing.sm,
                top: 0,
                bottom: 0,
                margin: 'auto 0px',
                cursor: 'inherit',
              }}
            />
          )}
        </Box>

        {helperText && <InputHelper error={error}>{helperText}</InputHelper>}
      </Box>
    )
  },
)

TextInput.displayName = 'TextInput'
