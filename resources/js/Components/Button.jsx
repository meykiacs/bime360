import { Link } from "@inertiajs/react"

const styles =
    "focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:ring-offset-2"

export function Button({
    type = "button",
    className = "",
    children,
    ...delegated
}) {
    return (
        <button {...delegated} type={type} className={`${styles} ${className}`}>
            {children}
        </button>
    )
}

export function UnstyledLink({ href, className = "", children, ...delegated }) {
    return (
        <Link href={href} {...delegated} className={`${styles} ${className}`}>
            {children}
        </Link>
    )
}
