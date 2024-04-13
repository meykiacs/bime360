import { UnstyledLink } from "./Button"

export default function NavLink({
    active = false,
    className = "",
    children,
    ...delegated
}) {
    return (
        <UnstyledLink
            {...delegated}
            className={
                "relative block py-2 2xl:text-xl " +
                (active
                    ? "after:content[''] after:absolute after:left-[50%] after:top-[57px] after:h-[27px] after:w-12 after:-translate-x-[45%] after:transform after:rounded-t-lg after:bg-primary-400 text-primary-400 "
                    : "text-gray-700 ") +
                className
            }
            role="menuitem"
        >
            {children}
        </UnstyledLink>
    )
}
