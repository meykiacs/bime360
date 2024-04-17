export default function FullBleed({
  as: Tag = "div",
  children,
  className = "",
  ...delegated
}) {
  return (
    <Tag {...delegated} className={`-mx-4 sm:-mx-16 md:-mx-24 lg:-mx-36 ${className}`}>
      {children}
    </Tag>
  )
}
