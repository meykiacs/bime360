
export default function FullBleedAbsolute({ as: Tag = 'div', children, className = '', ...delegated }) {
  return (
    <Tag
      {...delegated}
      className={`absolute top-0 start-0 end-0 ${className}`}
    >
      {children}
    </Tag>
  )
}
