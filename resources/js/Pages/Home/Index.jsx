import Container from "@/Components/Container"
import FullBleedAbsolute from "@/Components/FullBleedAbsolute"
import MobileHeader from "@/Components/MobileHeader"
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
                <MobileHeader className="relative z-30" />
                <h1 className="relative top-[50px] z-30 text-center text-4xl font-bold text-white">
                    بیمه 360
                </h1>
                <h2 className="relative top-[67px] z-30 text-center text-xl font-bold text-white">
                    از صدور تا خسارت 360 درجه با شما هستیم
                </h2>
                {/* <div className="absolute left-1/2 top-1/4 z-40 h-[205px] w-[410px] -translate-x-1/2 transform rounded-bl-[205px] rounded-br-[205px] border-b-4 border-t-0 border-primary-400 bg-white"></div> */}
                <div className="absolute left-1/2 top-[55%] z-40 h-[200px] w-[200px] -translate-x-[100%] transform rounded-bl-[200px] border-4 border-white opacity-50 border-t-0 border-r-0 bg-transparent">
                    <div className="bg-white w-2 h-2 transform -translate-x-[200px] z-50 opacity-1"></div>
                </div>
                <div className="absolute right-1/2 top-[55%] z-30 h-[200px] w-[200px] translate-x-[100%] transform rounded-br-[200px] border-4 border-primary-400 border-t-0 border-l-0"></div>
            </Container>
        </>
    )
}

export default Index
