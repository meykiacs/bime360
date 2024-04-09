
export default function Container({ as: Tag = 'div', children, className = '', ...delegated }) {
  return (
    <Tag
      {...delegated}
      className={`px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Tag>
  )
}
