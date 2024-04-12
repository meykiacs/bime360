export default function Divider({className="", ...delegated}) {
    return (
        <div {...delegated} className={`relative ${className}`}>
            <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
            >
                <div className="w-full border-t border-gray-300 mx-auto" />
            </div>
        </div>
    )
}
