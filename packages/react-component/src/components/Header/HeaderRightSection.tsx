import { Fragment, HTMLAttributes, useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { ReactComponent as FoldIcon } from 'src/assets/foldIcon.svg'
import { ReactComponent as UnFoldIcon } from 'src/assets/unFoldIcon.svg'
import { Box } from 'src/elements'

import { useFoldingNavBarContext } from '..'

interface HeaderRightSectionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @default false
   * @description
   * 패딩 여부
   */
  disablePadding?: boolean
  /**
   * 폴딩 기능을 사용할건지에 대한 여부
   * @optional
   * @default false
   */
  isFoldingMode?: boolean
}

export const HeaderRightSection = ({
  disablePadding = false,
  isFoldingMode = false,
  children,
  ...rest
}: HeaderRightSectionProps) => {
  const theme = useTheme()

  const { isNavBarFolded, toggleFoldingNavBar } = useFoldingNavBarContext()

  const foldIcon = useMemo(() => {
    if (!isFoldingMode) {
      return <Fragment />
    }

    if (isNavBarFolded) {
      return <UnFoldIcon cursor="pointer" onClick={() => toggleFoldingNavBar(false)} />
    }

    return <FoldIcon cursor="pointer" onClick={() => toggleFoldingNavBar(true)} />
  }, [isFoldingMode, isNavBarFolded])

  return (
    <Box
      css={[
        { display: 'flex', alignItems: 'center', flex: 1, gap: theme.spacing.lg },
        !disablePadding && {
          paddingLeft: theme.spacing.lg,
        },
      ]}
      {...rest}
    >
      {foldIcon}
      <Box
        css={[
          { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
          !disablePadding && {
            paddingRight: theme.spacing.lg,
          },
        ]}
      >
        {children}
      </Box>
    </Box>
  )
}
