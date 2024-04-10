import Container from "@/Components/Container"
import FullBleedAbsolute from "@/Components/FullBleedAbsolute"
import Header from "@/Components/Header"
import React from "react"

function Index() {
    return (
        <>
            <Container className="relative isolate h-[640px] pt-5 sm:h-[780px] lg:h-[960px] 2xl:h-[1080px]">
                <FullBleedAbsolute className="z-20 h-full">
                    {/* TODO: this image has to be responsive */}
                    <img
                        src="./hero.png"
                        className="block h-full w-full object-cover object-center"
                        alt="Hero"
                    />
                </FullBleedAbsolute>
                <Header className="relative z-30">hi</Header>
            </Container>
        </>
    )
}

export default Index
