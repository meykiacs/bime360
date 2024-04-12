import Container from "@/Components/Container"
import FullBleedAbsolute from "@/Components/FullBleedAbsolute"
import MobileHeader from "@/Components/MobileHeader"
import HomepageCurve from "@/Components/homepageCurve"
import React from "react"

function Index() {
    return (
        <>
            <Container className="relative isolate h-[640px] overflow-hidden pt-5 sm:h-[780px] lg:h-[960px] 2xl:h-[1080px]">
                <FullBleedAbsolute className="inset-0 z-20">
                    {/* TODO: this image has to be responsive */}
                    <img
                        src="./images/hero.png"
                        className="block h-full w-full object-cover object-center"
                        alt="Hero"
                    />
                </FullBleedAbsolute>
                <MobileHeader className="relative z-30 sm:hidden" />
                <h1 className="relative top-[50px] z-30 text-center text-4xl font-bold text-white">
                    بیمه 360
                </h1>
                <h2 className="relative top-[67px] z-30 text-center text-xl font-bold text-white">
                    از صدور تا خسارت 360 درجه با شما هستیم
                </h2>
                <HomepageCurve className="absolute z-40 left-[50%] transform -translate-x-[50%] top-[57%]" width="400" height="400" />
            </Container>
        </>
    )
}

export default Index
