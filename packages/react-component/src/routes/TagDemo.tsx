import { Tag } from 'src/components'

export const TagDemo = () => {
  return (
    <div className="flex gap-4">
      <Tag label={'Jason'} size="lg" />
      <Tag label={'Jason'} size="md" />
      <Tag label={'Jason'} size="sm" />
      <Tag label={'Jason'} size="lg" color="blue" />
      <Tag label={'Jason'} size="md" color="blue" />
      <Tag label={'Jason'} size="sm" color="blue" />
    </div>
  )
}
