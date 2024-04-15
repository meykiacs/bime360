import { DotButton, useDotButton } from "./DotButton"
import { PrevButton, NextButton, usePrevNextButtons } from "./ArrowButton"
import useEmblaCarousel from "embla-carousel-react"

const Carousel = ({ options, images, className = "" }) => {
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
    <section className={className} style={{ "--slide-spacing": "0rem" }}>
      <div ref={emblaRef} className="aspect-[328/124] w-full overflow-hidden">
        <div className="backface-hidden ms-[calc(var(--slide-spacing) * -1)] flex touch-pan-y">
          {images.map((Image, index) => (
            <div
              className="w-full flex-shrink-0 flex-grow-0 ps-[var(--slide-spacing)]"
              key={index}
            >
              <div className="h-full">
                <Image />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 grid grid-cols-[auto,1fr] justify-between gap-5">
        <div className="grid grid-cols-2 items-center gap-2">
          <PrevButton
            className="absolute end-[5%] top-[50%]"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            className="absolute start-[5%] top-[50%]"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>

        <div className="absolute bottom-[10px] start-[50%] flex flex-wrap items-center justify-end gap-[10px] md:bottom-4 md:gap-4">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`flex h-[10px] w-[10px] cursor-pointer touch-manipulation appearance-none items-center justify-center rounded-[50%] border-2 border-white md:h-4 md:w-4  ${index === selectedIndex ? "bg-white shadow-3xl" : "bg-transparent shadow-xl"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel
