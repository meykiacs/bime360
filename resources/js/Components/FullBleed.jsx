export default function FullBleed({
  as: Tag = "div",
  children,
  className = "",
  reference = null,
  ...delegated
}) {
  return (
    <Tag
      {...delegated}
      className={`-mx-4 sm:-mx-16 md:-mx-24 lg:-mx-36 ${className}`}
      ref={reference}
    >
      {children}
    </Tag>
  )
}
