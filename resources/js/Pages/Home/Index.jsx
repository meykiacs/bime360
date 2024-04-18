import Container from "@/Components/Container"
import FullBleedAbsolute from "@/Components/FullBleedAbsolute"
import Header from "@/Components/Header"
import MobileHeader from "@/Components/MobileHeader"
import React, { useState } from "react"
import HomepageCurve from "./Partials/HomepageCurve"
import FeatureBox from "./Partials/FeatureBox"
import Carousel from "@/Components/EmblaCarousel/Carousel"
import PillTabs from "@/Components/PillTabs"
import InsuranceCard from "@/Components/InsuranceCard"
import { range } from "@/utils"
import { Button } from "@/Components/Button"
import { ArrowLeft2Icon, DonakLogo } from "@/Components/SvgIcons"
import FullBleed from "@/Components/FullBleed"
import ScrollableFullBleed from "@/Components/ScrollableFullBleed"

function Index() {
  const images = [
    () => (
      <img className="block h-full w-full" src="./images/rect.png" alt="" />
    ),
    () => (
      <img className="block h-full w-full" src="./images/logo.png" alt="" />
    ),
  ]

  const [cardNumber, setCardNumber] = useState(null)

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

        {/* Desktop Header */}
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
          className="relative z-[70] mx-auto -mt-8 rounded-2xl bg-white shadow-4xl"
        />
      </Container>

      <Container as="section">
        <PillTabs className="mx-auto mt-[70px] h-16 max-w-[1200px] overflow-hidden rounded-xl shadow-4xl md:h-[100px]" />
        <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] justify-between gap-x-4 gap-y-8 lg:mt-12 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {range(12).map((i, index) => (
            <InsuranceCard
              text="تکمیل درمان"
              key={i}
              handleClick={() => setCardNumber(i)}
              selected={cardNumber === i}
              className={`${index > 5 ? "hidden" : index > 3 ? "hidden lg:block" : ""}`}
            />
          ))}
        </div>
        <Button className="mx-auto mt-12 flex items-center justify-between gap-4 rounded-xl border-2 border-text px-[18px] py-3 lg:gap-6 lg:px-6 lg:py-4">
          <p className="text-base font-bold lg:text-xl">مشاهده همه</p>
          <div className="h-5 w-5 lg:h-6 lg:w-6">
            <ArrowLeft2Icon className="h-full w-full" />
          </div>
        </Button>
      </Container>

      <Container as="section" className="mt-[70px]">
        <ScrollableFullBleed>
          <div className="mx-auto flex w-[640px] flex-col items-center justify-start bg-secondary-600 pb-7 pt-8 text-white sm:w-full sm:pb-20 sm:pt-10">
            <h3 className="text-xl font-bold sm:text-3xl">بیمه 360</h3>
            <p className="mt-4 w-80 px-2 text-center text-base sm:mt-8 sm:text-xl sm:w-[600px] md:w-auto">
              دارای مجوز رسمی از بیمه مرکزی بوده و تمامی امور آن طبق قوانین بیمه
              مرکزی انجام می گردد
            </p>
            <div className="mt-6 flex items-center justify-center gap-8 sm:mt-8 sm:gap-[100px]">
              <div className="h-16 w-16 text-mercury-400 sm:h-[104px] sm:w-[104px]">
                <DonakLogo className="h-full w-full" />
              </div>
              <div className="h-16 w-16 text-mercury-400 sm:h-[104px] sm:w-[104px]">
                <DonakLogo className="h-full w-full" />
              </div>
              <div className="h-16 w-16 text-mercury-400 sm:h-[104px] sm:w-[104px]">
                <DonakLogo className="h-full w-full" />
              </div>
              <div className="h-16 w-16 text-mercury-400 sm:h-[104px] sm:w-[104px]">
                <DonakLogo className="h-full w-full" />
              </div>
              <div className="h-16 w-16 text-mercury-400 sm:h-[104px] sm:w-[104px]">
                <DonakLogo className="h-full w-full" />
              </div>
            </div>
          </div>
        </ScrollableFullBleed>
      </Container>

      <Container as="section" className="mt-[70px] relative isolate">
        <Container className="relative bg-text h-[400px] rounded-[40px] pt-8 text-white">
          <h3 className="font-bold text-base">جدیتریــــــن مقالات در بیمه 360</h3>
        </Container>
        <ScrollableFullBleed className="transform -translate-y-[308px] bg-transparent">
          <div className="mx-auto flex w-[820px] flex-col items-center justify-start bg-transparent sm:w-full">
            
            <h3 className="text-xl font-bold sm:text-3xl">بیمه 360</h3>
            <p className="mt-4 w-80 px-2 text-center text-base sm:mt-8 sm:text-xl sm:w-[600px] md:w-auto">
              دارای مجوز رسمی از بیمه مرکزی بوده و تمامی امور آن طبق قوانین بیمه
              مرکزی انجام می گردد
            </p>
            <div className="mt-6 flex items-center justify-center gap-8 sm:mt-8 sm:gap-[100px]">
              <div className="h-16 w-16 text-mercury-400 sm:h-[104px] sm:w-[104px]">
                <DonakLogo className="h-full w-full" />
              </div>
              <div className="h-16 w-16 text-mercury-400 sm:h-[104px] sm:w-[104px]">
                <DonakLogo className="h-full w-full" />
              </div>
              <div className="h-16 w-16 text-mercury-400 sm:h-[104px] sm:w-[104px]">
                <DonakLogo className="h-full w-full" />
              </div>
              <div className="h-16 w-16 text-mercury-400 sm:h-[104px] sm:w-[104px]">
                <DonakLogo className="h-full w-full" />
              </div>
              <div className="h-16 w-16 text-mercury-400 sm:h-[104px] sm:w-[104px]">
                <DonakLogo className="h-full w-full" />
              </div>
            </div>
          </div>
        </ScrollableFullBleed>
      </Container>
    </>
  )
}

export default Index
