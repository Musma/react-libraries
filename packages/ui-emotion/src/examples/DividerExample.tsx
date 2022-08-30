import { css, cx } from '@emotion/css'
import { Divider } from 'src/components'

export const DividerExample = () => {
  return (
    <div className={css({ display: 'flex', gap: '8px' })}>
      <div className={contentsContainerCss}>
        <div className={contentsCss}>some contents</div>
        <Divider />
        <div className={contentsCss}>other contents</div>
      </div>
      <div className={cx(contentsContainerCss, css({ display: 'flex' }))}>
        <div className={contentsCss}>some contents</div>
        <Divider orientation="vertical" />
        <div className={contentsCss}>other contents</div>
      </div>
    </div>
  )
}

const contentsCss = css({ textAlign: 'center' })
const contentsContainerCss = css({ width: '150px', border: '1px solid', borderRadius: '4px' })
