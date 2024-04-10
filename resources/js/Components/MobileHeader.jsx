import useToggle from "@/hooks/useToggle"
import Drawer from "./Drawer"
import Icon from "./Icon"
import { Link } from "@inertiajs/react"

export default function MobileHeader({ className = "", ...delegated }) {
    const [isMenuOpen, toggleIsMenuOpen] = useToggle(false)

    return (
        <header
            {...delegated}
            className={`bg-mercury-200 flex h-[62px] items-center justify-between rounded-2xl px-4 ${className}`}
        >
            <button onClick={toggleIsMenuOpen}>
                <Icon
                    icon="menu"
                    className="flex h-8 w-8 items-center justify-center rounded-[10px] outline outline-1 outline-black"
                />
            </button>
            <Link className="block h-8 w-8" href={route('index')}>
                <img
                    src="./images/logo.png"
                    alt="logo"
                    className="block h-full w-full"
                />
            </Link>
            <button>
                <Icon
                    icon="cart"
                    className="outline-primary-400 flex h-8 w-8 items-center justify-center rounded-[10px]  border-solid outline outline-1"
                />
            </button>
            <button>
                <Icon
                    icon="profile"
                    className="outline-primary-400 flex h-8 w-8 items-center justify-center rounded-[10px]  border-solid outline outline-1"
                />
            </button>
            <button>
                <Icon
                    icon="calling"
                    className="bg-primary-400 flex h-8 w-8 items-center justify-center rounded-[10px]"
                />
            </button>

            <Drawer handleDismiss={toggleIsMenuOpen} isOpen={isMenuOpen} />
        </header>
    )
}
