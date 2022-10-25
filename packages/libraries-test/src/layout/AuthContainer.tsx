import {
  AuthShell,
  Box,
  Button,
  Card,
  Divider,
  TextButton,
  TextInput,
} from '@musma/react-component'
import { FillPersonIcon } from '@musma/react-icons'

import Background from './images/background.png'

export const AuthContainer = () => {
  return (
    <AuthShell backgroundImage={Background} css={{}}>
      <Card css={{ padding: 80, width: 1000 }}>
        <Box>
          <TextInput
            label="아이디"
            startAdornment={<FillPersonIcon width={16} height={16} />}
            placeholder="aspodkaspodkaspo"
            error={true}
            helperText="123123"
          />

          <TextInput
            label="아이디"
            startAdornment={<FillPersonIcon width={16} height={16} />}
            placeholder="aspodkaspodkaspo"
          />

          <TextInput label="패스워드" disabled={true} />

          <TextInput
            label="패스워드"
            disabled={false}
            type="password"
            startAdornment={<FillPersonIcon width={16} height={16} />}
          />

          <Button fullWidth={true} disabled={true}>
            로그인
          </Button>
        </Box>

        <Box css={{ display: 'flex', alignItems: 'center' }}>
          <TextButton size="lg">계정 관리</TextButton>
          <Divider orientation="vertical" />
          <TextButton size="lg">계정 관리</TextButton>
        </Box>
      </Card>
    </AuthShell>
  )
}
