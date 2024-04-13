import { Button } from "./Button"

export default function NavIconButton({
    IconComponent,
    srText,
    className = "",
}) {
    return (
        <Button
            className={`flex h-8 w-8 items-center justify-center rounded-[10px] outline outline-1  lg:h-10 lg:w-10 lg:rounded-lg xl:h-12 xl:w-12 xl:rounded-xl xl:outline-2 2xl:h-16 2xl:w-16 ${className}`}
        >
            <span className="sr-only">{srText}</span>
            <IconComponent className="h-5 w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8" />
        </Button>
    )
}

export function NavIconButtonText({
    IconComponent,
    srText,
    className = "",
    text,
}) {
    return (
        <Button
            className={`flex h-8 w-8 items-center justify-center rounded-[10px] outline outline-1 lg:h-10 lg:w-10 lg:rounded-lg xl:h-12 xl:w-32 xl:rounded-xl xl:outline-2 2xl:h-16 2xl:w-48 ${className}`}
        >
            <span className="sr-only">{srText}</span>
            <div className="flex px-0 justify-center w-full xl:justify-between xl:pe-2 xl:ps-2 2xl:pe-5 2xl:ps-4 2xl:text-lg 2xl:font-bold">
                <p className="hidden xl:block">{text}</p>
                <IconComponent className="h-5 w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8" />
            </div>
        </Button>
    )
}
