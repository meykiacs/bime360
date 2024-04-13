import useToggle from "@/hooks/useToggle"
import Drawer from "./Drawer"
import { Button, UnstyledLink } from "./Button"
import NavIconButton from "./NavIconButton"
import { CallingIcon, CartIcon, MenuIcon, ProfileIcon } from "./SvgIcons"

export default function MobileHeader({ className = "", ...delegated }) {
    const [isMenuOpen, toggleIsMenuOpen] = useToggle(false)

    return (
        <header
            {...delegated}
            className={`flex h-[62px] items-center justify-between rounded-2xl bg-mercury-200 px-4 max-w-[460px] sm:max-w-[500px] sm:px-6 mx-auto ${className}`}
        >
            <Button
                onClick={toggleIsMenuOpen}
                aria-controls="mobile-menu"
                aria-expanded="false"
                className="flex h-8 w-8 items-center justify-center rounded-[10px] text-black outline outline-1 outline-black hover:text-primary-300 hover:outline-primary-600"
            >
                <span className="sr-only">Menu button</span>
                <MenuIcon className="w-5 h-5" />
            </Button>
            <UnstyledLink className="block h-8 w-8" href={route("index")}>
                <span className="sr-only">Link to Home</span>
                <img
                    src="./images/logo.png"
                    alt="logo"
                    className="block h-full w-full"
                />
            </UnstyledLink>
            <NavIconButton
                href={route("index")}
                IconComponent={CartIcon}
                srText="Cart"
                className="text-primary-400 outline-primary-400 hover:bg-primary-400 hover:text-mercury-50"
            />
            <NavIconButton
                href={route("index")}
                IconComponent={ProfileIcon}
                srText="Profile"
                className="text-primary-400 outline-primary-400 hover:bg-primary-400 hover:text-mercury-50"
            />
            <NavIconButton
                href={route("index")}
                IconComponent={CallingIcon}
                srText="Call to action"
                className="bg-primary-400 text-mercury-50 hover:bg-mercury-200 hover:text-primary-400"
            />

            <Drawer handleDismiss={toggleIsMenuOpen} isOpen={isMenuOpen} />
        </header>
    )
}
