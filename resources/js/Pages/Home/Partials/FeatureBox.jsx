import React from "react"

export default function FeatureBox({ children, className = "" }) {
    return (
        <article
            className={`${className} overflow-hidden lg:h-[70px] lg:w-[170px] lg:rounded-xl xl:h-[100px] xl:w-[248px] xl:rounded-2xl`}
        >
            <div className="s-0 absolute top-0 grid h-full w-full bg-white opacity-20 blur-2xl" />
            <p className="s-0 top-0 grid  h-full w-full place-content-center bg-transparent font-bold text-white lg:text-xl xl:text-3xl">
                {children}
            </p>
        </article>
    )
}
