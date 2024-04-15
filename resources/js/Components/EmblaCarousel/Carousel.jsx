import { DotButton, useDotButton } from "./DotButton"
import { PrevButton, NextButton, usePrevNextButtons } from "./ArrowButton"
import useEmblaCarousel from "embla-carousel-react"

const Carousel = ({ slides, options, className = "" }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <section className={className} style={{ "--slide-spacing": "1rem" }}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="backface-hidden ml-[calc(var(--slide-spacing) * -1)] flex touch-pan-y">
          {slides.map((index) => (
            <div
              className="w-full flex-none pl-[var(--slide-spacing)]"
              key={index}
            >
              <div className="flex h-full items-center justify-center rounded-3xl text-3xl font-bold">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 grid grid-cols-[auto,1fr] justify-between gap-5">
        <div className="grid grid-cols-2 items-center gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="-mr-2 flex flex-wrap items-center justify-end">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`flex h-10 w-10 cursor-pointer touch-manipulation appearance-none items-center justify-center rounded-[50%] border-2 bg-transparent no-underline after:flex after:h-6 after:w-6 after:items-center after:rounded-[50%] after:shadow-sm ${index === selectedIndex ? "after:shadow-lg" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel
