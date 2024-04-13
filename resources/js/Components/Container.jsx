export default function Container({
    as: Tag = "div",
    children,
    className = "",
    ...delegated
}) {
    return (
        <Tag
            {...delegated}
            className={`px-4 sm:px-16 md:px-24 xl:px-36 ${className}`}
        >
            {children}
        </Tag>
    )
}
