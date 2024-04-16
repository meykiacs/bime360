import Container from "@/Components/Container"
import FullBleedAbsolute from "@/Components/FullBleedAbsolute"
import Header from "@/Components/Header"
import MobileHeader from "@/Components/MobileHeader"
import React from "react"
import HomepageCurve from "./Partials/HomepageCurve"
import FeatureBox from "./Partials/FeatureBox"
import Carousel from "@/Components/EmblaCarousel/Carousel"
import PillTabs from "@/Components/PillTabs"

function Index() {
  const images = [
    () => (
      <img
        className="h-full w-full block"
        src="./images/rect.png"
        alt=""
      />
    ),
    () => (
      <img
        className="h-full w-full block"
        src="./images/logo.png"
        alt=""
      />
    ),
  ]
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
          className="absolute left-[50%] top-[57%] z-40 h-[400px] w-[400px] -translate-x-[50%] transform
                    sm:top-[55%] sm:h-[500px] sm:w-[500px]
                    lg:top-[50%] lg:h-[700px] lg:w-[700px]
                    xl:top-[44%] xl:h-[900px] xl:w-[900px]
                    "
        />
        <FeatureBox className="absolute z-50 hidden lg:start-[calc(40vw-450px)] lg:top-[47%] lg:block xl:start-[calc(35vw-500px)] xl:top-[40%]">
          شروع مشاوره
        </FeatureBox>
        <FeatureBox className="absolute z-50 hidden lg:start-[calc(40vw-400px)] lg:top-[60.5%] lg:block xl:start-[calc(35vw-450px)] xl:top-[58%] 2xl:top-[56%]">
          بررسی و پیشنهاد
        </FeatureBox>
        <FeatureBox className="absolute z-50 hidden lg:start-[calc(40vw-350px)] lg:top-[74%] lg:block xl:start-[calc(35vw-400px)] xl:top-[75%] 2xl:top-[72%]">
          استعلام نرخ
        </FeatureBox>

        <FeatureBox className="absolute z-50 hidden lg:end-[calc(40vw-450px)] lg:top-[47%] lg:block xl:end-[calc(35vw-500px)] xl:top-[40%]">
          پیگیری و پرداخت
        </FeatureBox>
        <FeatureBox className="absolute z-50 hidden lg:end-[calc(40vw-400px)] lg:top-[60.5%] lg:block xl:end-[calc(35vw-450px)] xl:top-[58%] 2xl:top-[56%]">
          خرید
        </FeatureBox>
        <FeatureBox className="absolute z-50 hidden lg:end-[calc(40vw-350px)] lg:top-[74%] lg:block xl:end-[calc(35vw-400px)] xl:top-[75%] 2xl:top-[72%]">
          خسارت
        </FeatureBox>
      </Container>
      <Container className="isolate" as="section">
        <Carousel
          images={images}
          options={{ direction: "rtl", loop: true }}
          className="relative mx-auto rounded-2xl -mt-8 z-[70] bg-white shadow-4xl"
        />
      </Container>
      <Container as="section">
        <PillTabs className="mt-[70px] max-w-[1200px] mx-auto h-16 md:h-[100px] rounded-xl overflow-hidden shadow-4xl" />
      </Container>
    </>
  )
}

export default Index
