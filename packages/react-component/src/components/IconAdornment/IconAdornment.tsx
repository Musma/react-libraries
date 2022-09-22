import styled from '@emotion/styled'

export const IconAdornment = styled.button({
  padding: 4,
  borderRadius: '50%',
  userSelect: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  outline: 0,
  border: 0,
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  '&:active': {
    transform: 'translateY(1px)',
  },
})
