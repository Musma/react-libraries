import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { ReactNode } from 'react'
import { Badge, BreadCrumb, Tooltip, Button, Typography } from './components'
import { Tag } from './components/Tag'

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
        <Typography>body type typography</Typography>
      </Box>
      <Box title="button">
        <Button className={css({ width: '100px' })} variant="danger" disabled={true} label="test" />
      </Box>
      <Box title="badge">{<Badge count={222}>badge</Badge>}</Box>
      <Box title="breadcrumb">
        <BreadCrumb crumbs={['a', 'b', 'c']} onClick={(c) => console.log(c)} />
      </Box>
      <Box title="tooltip">
        <Tooltip message="world">hello</Tooltip>
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
    </div>
  )
}

export default App

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
