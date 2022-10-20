import { css } from '@emotion/react'
import { Divider } from '@musma/react-component'

export const DividerExample = () => {
  return (
    <div css={{ display: 'flex', gap: '8px' }}>
      <div css={contentsContainerCss}>
        <div css={contentsCss}>some contents</div>
        <Divider />
        <div css={contentsCss}>other contents</div>
      </div>
      <div
        css={[
          contentsContainerCss,
          { display: 'flex', backgroundColor: 'yellow', alignItems: 'center' },
        ]}
      >
        <div css={contentsCss}>some contents</div>
        <Divider orientation="vertical" />
        <div css={contentsCss}>other contents</div>
      </div>
    </div>
  )
}

const contentsCss = css({ textAlign: 'center' })
const contentsContainerCss = css({ width: '150px', border: '1px solid', borderRadius: '4px' })
