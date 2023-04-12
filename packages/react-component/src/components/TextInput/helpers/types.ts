import { INPUT_TEXT_RULES } from './rules'

export type RulesType = (typeof INPUT_TEXT_RULES)[keyof typeof INPUT_TEXT_RULES]
export type InputType = 'text' | 'password'
