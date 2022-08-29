import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { ReactNode } from 'react'
import { Badge, BreadCrumb, Tooltip, Button, Typography, Modal } from './components'
import { Tag } from './components/Tag'
import { ModalExample, TextInputExample } from './examples'

function App() {
  return (
    <div
      className={css({
        padding: 32,
        display: 'grid',
        gridTemplateRows: 'auto',
        gridTemplateColumns: 'repeat(4, 400px)',
      })}
    >
      <Box title="typography">
        <Typography type="heading" variant="h1">
          h1
        </Typography>
        <Typography type="heading" variant="h2">
          h2
        </Typography>
        <Typography type="heading" variant="h3">
          h3
        </Typography>
        <Typography type="heading" variant="h4">
          h4
        </Typography>
        <Typography type="heading" variant="h5">
          h5
        </Typography>
        <Typography type="heading" variant="h6">
          h6
        </Typography>
        <Typography type="subTitle" variant="subTitle1">
          subTitle1
        </Typography>
        <Typography type="subTitle" variant="subTitle2">
          subTitle2
        </Typography>
      </Box>
      <Box title="button">
        <Button className={css({ width: '100px' })} variant="danger" disabled={true} label="test" />
      </Box>
      <Box title="badge">{<Badge count={222}>badge</Badge>}</Box>
      <Box title="breadcrumb">
        <BreadCrumb crumbs={['a', 'b', 'c']} onClick={(c) => console.log(c)} />
      </Box>
      <Box title="tooltip">
        <Tooltip message="I'm Tooltip!" width={100}>
          hover me
        </Tooltip>
      </Box>
      <Box title="tag">
        <Tag label="sampleTag" />
        <Tag label="sampleTag" variant="rectangle" />
        <Tag label="sampleTag" color="blue" />
        <Tag label="sampleTag" variant="rectangle" color="blue" />
        <Tag label="sampleTag" onClose={() => undefined} />
        <Tag label="sampleTag" variant="rectangle" onClose={() => undefined} />
        <Tag label="sampleTag" color="blue" onClose={() => undefined} />
        <Tag label="sampleTag" variant="rectangle" color="blue" onClose={() => undefined} />
      </Box>
      <Box title="modal">
        <ModalExample />
      </Box>
      <Box title="textInput">
        <TextInputExample />
      </Box>
    </div>
  )
}

export default App

// FIXME: 따로 컴포넌트를 빼는게 나아보입니다.
const Box = ({ children, title }: { children: ReactNode; title: string }) => {
  const theme = useTheme()
  return (
    <div
      className={css({
        margin: 8,
        border: '1px solid gray',
        borderRadius: '6px',
        padding: 16,
      })}
    >
      <Typography
        type="heading"
        variant="h3"
        className={css({ borderBottom: `1px solid ${theme.color.gray.light}` })}
      >
        {title}
      </Typography>
      <div
        className={css({
          marginTop: 16,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '4px',
        })}
      >
        {children}
      </div>
    </div>
  )
}
