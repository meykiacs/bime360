export default function FluidGrid({
  as: Tag = "div",
  className,
  children,
  ...delegated
}) {
  return (
    <Tag
      {...delegated}
      role="list"
      className={`grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-6 ${className}`}
    >
      {children}
    </Tag>
  )
}
