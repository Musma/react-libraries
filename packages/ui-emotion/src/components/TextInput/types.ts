import { Size } from 'src/styles/theme' // 절대경로 사용해주세요

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'className'> {
  type?: 'text' | 'password' | 'search'
  size?: Size
  label: string
  helperText?: { type: 'invalid' | 'valid'; message: string }
  inputClassName?: string
  handleSearchClick?: () => void
}
