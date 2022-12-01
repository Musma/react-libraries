import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'
import { OutlineCautionIcon, OutlineCheckCircleIcon } from '@musma/react-icons'

import { Typography } from 'src/components'

interface InputHelperProps extends HTMLAttributes<HTMLElement> {
  error?: boolean
}

const iconSize = {
  width: 12,
  height: 12,
}

export const InputHelper = ({ error, children, ...rest }: InputHelperProps) => {
  const theme = useTheme()

  return (
    <Typography
      type="caption2"
      css={{
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        bottom: -14,
        left: 4,
        gap: 4,
        color: error ? theme.colors.red.main : theme.colors.green.main,
      }}
      {...rest}
    >
      {error ? (
        <OutlineCautionIcon {...iconSize} color={theme.colors.red.main} />
      ) : (
        <OutlineCheckCircleIcon {...iconSize} color={theme.colors.green.main} />
      )}

      {children}
    </Typography>
  )
}
