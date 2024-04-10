export default function FullBleedAbsolute({
    as: Tag = "div",
    children,
    className = "",
    ...delegated
}) {
    return (
        <Tag
            {...delegated}
            className={`absolute end-0 start-0 top-0 ${className}`}
        >
            {children}
        </Tag>
    )
}
