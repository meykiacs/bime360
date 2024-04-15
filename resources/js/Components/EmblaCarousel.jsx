import React, { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ direction: "rtl", loop: true })


  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div>
      <div className="mx-auto h-52 w-96 overflow-hidden border" ref={emblaRef}>
        <div className="flex">
          <div className="w-full flex-none">Slide 1</div>
          <div className="w-full flex-none">Slide 2</div>
          <div className="w-full flex-none">Slide 3</div>
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  )
}
