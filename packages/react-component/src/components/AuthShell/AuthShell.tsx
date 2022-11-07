import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

interface AuthShellProps extends HTMLAttributes<HTMLDivElement> {
  backgroundImage: string
}

/**
 *
 * @param backgroundImage 배경 이미지입니다.
 * @description
 * 로그인, 회원가입, 비밀번호 찾기, 아이디 찾기 페이지의 레이아웃 컴포넌트입니다.
 */
export const AuthShell = ({ backgroundImage, ...rest }: AuthShellProps) => {
  const theme = useTheme()
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        minWidth: theme.layoutSize.minBodyWidth,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundImage: `url(${backgroundImage})`,
      }}
      {...rest}
    />
  )
}
