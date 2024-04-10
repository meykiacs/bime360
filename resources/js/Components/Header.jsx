import React from "react"

export default function Header({ children, className = "", ...delegated }) {
    return (
        <header
            {...delegated}
            className={`h-[62px] rounded-2xl bg-white ${className}`}
        >
            {children}
        </header>
    )
}
