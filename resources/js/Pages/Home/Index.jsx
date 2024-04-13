import Container from "@/Components/Container"
import FullBleedAbsolute from "@/Components/FullBleedAbsolute"
import Header from "@/Components/Header"
import MobileHeader from "@/Components/MobileHeader"
import HomepageCurve from "@/Components/homepageCurve"
import React from "react"

function Index() {
    return (
        <>
            <Container className="relative isolate h-[640px] overflow-hidden pt-5 sm:h-[780px] sm:pt-12 lg:min-h-[960px] 2xl:min-h-[1080px]">
                <FullBleedAbsolute className="inset-0 z-20">
                    {/* TODO: this image has to be responsive */}
                    <img
                        src="./images/hero.png"
                        className="block h-full w-full object-cover object-center"
                        alt="Hero"
                    />
                </FullBleedAbsolute>
                <MobileHeader className="relative z-30 lg:hidden" />
                <Header className="relative z-30 hidden lg:flex" />
                <h1 className="relative top-[50px] z-30 text-center text-4xl font-bold text-white">
                    بیمه 360
                </h1>
                <h2 className="relative top-[67px] z-30 text-center text-xl font-bold text-white">
                    از صدور تا خسارت 360 درجه با شما هستیم
                </h2>
                <HomepageCurve
                    className="absolute left-[50%] top-[57%] z-40 -translate-x-[50%] transform w-[400px] h-[400px]
                    sm:w-[500px] sm:h-[500px] sm:top-[55%]
                    md:w-[700px] md:h-[700px] md:top-[50%]
                    xl:w-[900px] xl:h-[900px] xl:top-[44%]
                    "
                />
            </Container>
        </>
    )
}

export default Index
