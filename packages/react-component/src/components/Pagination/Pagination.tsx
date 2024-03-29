import { useMemo } from 'react'

import { useTheme } from '@emotion/react'
import {
  ArrowFirstMediumIcon,
  ArrowLeftMediumIcon,
  ArrowLastMediumIcon,
  ArrowRightMediumIcon,
} from '@musma/react-icons'

import { Typography, Select, IconAdornment } from 'src/components'
import { Box } from 'src/elements'

import { ICON_SIZE, ITEMS_PER_PAGE_OPTIONS, PAGE_COUNT } from './helpers'

export interface PaginationProps {
  /**
   * @required
   * 현재 페이지
   */
  currentPage: number
  /**
   * @default 10
   *
   */
  itemsPerPage?: number
  /**
   *
   */
  itemsPerPageOptions?: {
    label: string
    value: number
  }[]
  /**
   * @required
   * 전체 페이지 개수
   */
  totalPages: number
  /**
   * Page Change Callback
   */
  onPageChange: (page: number) => void
  /**
   * Row Per Page Change Callback
   */
  onItemsPerPageChange: (itemsPerPage: number) => void
}

/**
 * 페이지네이션 컴포넌트입니다.
 */
export const Pagination = ({
  currentPage,
  totalPages,
  itemsPerPage = 10,
  itemsPerPageOptions = ITEMS_PER_PAGE_OPTIONS,
  onPageChange,
  onItemsPerPageChange,
}: PaginationProps) => {
  const theme = useTheme()

  /**
   * 페이지 그룹
   * ex) 한 페이지당 보여주는 개수: 10
   * 1~10 => 1 Page Group
   * 10~20 => 2 Page Group
   */
  const pageGroup = useMemo(() => {
    /**
     * Math.ceil 내림
     */
    return Math.ceil(currentPage / PAGE_COUNT) // 현재 페이지 / 한 페이지당 보여주는 개수
  }, [currentPage])

  // 현재 페이지 그룹내에서 마지막 페이지
  const lastPage = useMemo(() => {
    let last = pageGroup * PAGE_COUNT // 페이지 그룹 * 한 페이지당 보여주는 개수
    if (last > totalPages) {
      // last가 전체 페이지 수보다 많을 경우 대비
      last = totalPages
    }
    return last
  }, [pageGroup, totalPages])

  // 현재 페이지 그룹내에서 첫 페이지
  const firstPage = useMemo(() => {
    if (pageGroup === 1) {
      return 1
    }
    return (pageGroup - 1) * PAGE_COUNT + 1
  }, [pageGroup])

  // 이전 페이지
  const prevPage = useMemo(() => {
    if (firstPage === 1) {
      return 1
    }
    return firstPage - 1
  }, [firstPage])

  // 다음 페이지
  const nextPage = useMemo(() => {
    if (lastPage === totalPages) {
      return totalPages
    }
    return lastPage + 1
  }, [lastPage, totalPages])

  // 현재 그룹의 페이지 리스트
  const pageList = useMemo(() => {
    if (firstPage < lastPage) {
      return [...Array(lastPage - firstPage + 1)].reduce((prev, _, index) => {
        return (prev = [...prev, firstPage + index])
      }, []) as number[]
    }

    if (firstPage === lastPage) {
      return [firstPage]
    }

    return []
  }, [firstPage, lastPage])

  // 맨 처음 페이지 그룹으로 이동 버튼 비활성화 여ㅑ부
  const isForefrontDisabled = useMemo(() => {
    return pageGroup === 1
  }, [pageGroup])

  // 이전 페이지 그룹 버튼 비활성화 여부
  const isPrevDisabled = useMemo(() => {
    return currentPage === 1
  }, [currentPage])

  // 다음 페이지 그룹 버튼 비활성화 여부
  const isNextDisabled = useMemo(() => {
    return currentPage === totalPages
  }, [currentPage, totalPages])

  // 마지막 페이지 그룹으로 이동 버튼 비활성화 여부
  const isRearMostDisabled = useMemo(() => {
    return pageGroup === Math.ceil(totalPages / PAGE_COUNT)
  }, [pageGroup, totalPages])

  // 현재 페이지와 전체 페이지가 같을 경우 Pagination 렌더링 안되도록
  return (
    <Box css={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <Typography type="body3" css={{ marginRight: theme.spacing.sm }}>
        Rows per page
      </Typography>

      <Select
        value={itemsPerPage}
        options={itemsPerPageOptions}
        position="top"
        css={{ width: 80, marginRight: theme.spacing.md }}
        onChange={(value) => {
          if (value) {
            onItemsPerPageChange(value)
          }
        }}
      />

      <Box css={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {/* 맨 처음 페이지로 이동 */}
        <IconAdornment
          onClick={() => {
            onPageChange(1)
          }}
          noPadding={true}
          disabled={isForefrontDisabled}
        >
          <ArrowFirstMediumIcon
            color={isForefrontDisabled ? theme.colors.gray.main : theme.colors.black.dark}
            {...ICON_SIZE}
          />
        </IconAdornment>

        {/* 이전 페이지로 이동 */}
        <IconAdornment
          onClick={() => {
            onPageChange(prevPage)
          }}
          noPadding={true}
          disabled={isPrevDisabled}
        >
          <ArrowLeftMediumIcon
            color={isPrevDisabled ? theme.colors.gray.main : theme.colors.black.dark}
            {...ICON_SIZE}
          />
        </IconAdornment>

        {pageList.map((page) => {
          const isMatch = currentPage === page
          return (
            <IconAdornment
              key={page}
              noPadding={true}
              css={[isMatch && { pointerEvents: 'none' }]}
              onClick={() => {
                onPageChange(page)
              }}
            >
              <Box
                css={[
                  {
                    ...ICON_SIZE,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    borderRadius: '50%',
                  },
                  isMatch && {
                    backgroundColor: theme.colors.primary.main,
                  },
                ]}
              >
                <Typography type="caption1" css={[isMatch && { color: theme.colors.white.main }]}>
                  {page}
                </Typography>
              </Box>
            </IconAdornment>
          )
        })}

        {/* 뒷 페이지 이동 버튼 */}
        <IconAdornment
          onClick={() => {
            onPageChange(nextPage)
          }}
          noPadding={true}
          disabled={isNextDisabled}
        >
          <ArrowRightMediumIcon
            color={isNextDisabled ? theme.colors.gray.main : theme.colors.black.dark}
            {...ICON_SIZE}
          />
        </IconAdornment>

        {/* 끝 페이지로 이동 버튼 */}
        <IconAdornment
          onClick={() => {
            onPageChange(totalPages)
          }}
          noPadding={true}
          disabled={isRearMostDisabled}
        >
          <ArrowLastMediumIcon
            color={isRearMostDisabled ? theme.colors.gray.main : theme.colors.black.dark}
            {...ICON_SIZE}
          />
        </IconAdornment>
      </Box>
    </Box>
  )
}
