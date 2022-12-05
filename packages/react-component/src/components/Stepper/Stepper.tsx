import { HTMLAttributes } from 'react'

import { Box } from 'src/elements'

import { Step } from './Step'

export interface StepBarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 현재 스텝의 인덱스
   */
  activeStep: number
  /**
   * 전체 스텝의 수
   */
  totalStep: number
}

export const Stepper = ({ activeStep, totalStep, ...rest }: StepBarProps) => {
  return (
    <Box css={{ display: 'flex' }} {...rest}>
      {[...Array(totalStep)].map((_, index) => (
        <Step
          key={`step-key-${index}`}
          step={index + 1}
          first={index === 0}
          active={activeStep <= index}
          last={index + 1 === totalStep}
        />
      ))}
    </Box>
  )
}
