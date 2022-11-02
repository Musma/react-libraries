import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

import { Step } from './Step'

export interface StepBarProps {
  /**
   * 현재 스텝의 인덱스
   */
  activeStep: number
  totalStep: number
}

// TODO: 테마 사용, styled 사용하여 코드 정리
export const Stepper = ({ activeStep, totalStep }: StepBarProps) => {
  const theme = useTheme()
  return (
    <Box css={{ display: 'flex' }}>
      {[...Array(totalStep)].map((step, index) => (
        <Step
          key={`step-key-${index}`}
          step={index + 1}
          first={index === 0}
          active={activeStep === index + 1}
          last={index + 1 === totalStep}
        />
      ))}
    </Box>
  )
}
