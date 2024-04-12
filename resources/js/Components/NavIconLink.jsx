import { UnstyledLink } from "./Button"

export default function NavIconLink({
    IconComponent,
    srText,
    className = "",
    href,
}) {
    return (
        <UnstyledLink
            className={`flex h-8 w-8 items-center justify-center rounded-[10px] border-solid outline outline-1 ${className}`}
            href={href}
        >
            <span className="sr-only">{srText}</span>
            <IconComponent width="20" height="20" />
        </UnstyledLink>
    )
}
