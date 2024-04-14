export default function FullBleed({
  as: Tag = "div",
  children,
  className = "",
  ...delegated
}) {
  return (
    <Tag {...delegated} className={`-mx-4 sm:-mx-6 lg:-mx-8 ${className}`}>
      {children}
    </Tag>
  )
}
