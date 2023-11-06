import { Fragment, HTMLAttributes, useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { ReactComponent as FoldIcon } from 'src/assets/foldIcon.svg'
import { ReactComponent as UnFoldIcon } from 'src/assets/unFoldIcon.svg'
import { Box } from 'src/elements'

import { useFolderNavBarContext } from '..'

interface HeaderRightSectionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @default false
   * @description
   * 패딩 여부
   */
  disablePadding?: boolean
  /**
   * @default false
   * @description
   * 접었다 펼칠 수 있는 네비게이션 바를 사용하는지 여부
   */
  isFolder?: boolean
}

export const HeaderRightSection = ({
  disablePadding = false,
  isFolder = false,
  children,
  ...rest
}: HeaderRightSectionProps) => {
  const theme = useTheme()

  const { isNavFold, toggleNavFoldState } = useFolderNavBarContext()

  const foldIcon = useMemo(() => {
    if (!isFolder) {
      return <Fragment />
    }

    if (isNavFold) {
      return <UnFoldIcon cursor="pointer" onClick={() => toggleNavFoldState(false)} />
    }

    return <FoldIcon cursor="pointer" onClick={() => toggleNavFoldState(true)} />
  }, [isFolder, isNavFold])

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
