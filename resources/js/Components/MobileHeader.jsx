import Icon from "./Icon"

export default function MobileHeader({ className = "", ...delegated }) {
    return (
        <header
            {...delegated}
            className={`bg-mercury-200 flex h-[62px] items-center justify-between rounded-2xl px-4 ${className}`}
        >
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
        </header>
    )
}
