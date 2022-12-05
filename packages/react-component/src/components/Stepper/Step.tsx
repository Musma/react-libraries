import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { Box } from 'src/elements'

interface StepProps {
  step: number
  first?: boolean
  active?: boolean
  last?: boolean
}

export const Step = ({ step, first, active }: StepProps) => {
  const theme = useTheme()

  return (
    // Wrapper Box
    <Box
      css={[
        {
          flex: 1,
          position: 'relative',
        },
      ]}
    >
      {/* Separator */}
      {!first && (
        <Box
          css={{
            position: 'absolute',
            top: 9,
            left: 'calc(-50% + 9px)',
            right: 'calc(50% + 9px)',
            height: 2,
            backgroundColor: active ? theme.colors.primary.main : theme.colors.gray.lighter,
          }}
        />
      )}

      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          css={[
            {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 18,
              height: 18,
              borderRadius: '50%',
              backgroundColor: active ? theme.colors.primary.main : theme.colors.gray.lighter,
            },
          ]}
        >
          <Typography
            type="caption1"
            css={{ color: active ? theme.colors.white.main : theme.colors.black.dark }}
          >
            {step}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
