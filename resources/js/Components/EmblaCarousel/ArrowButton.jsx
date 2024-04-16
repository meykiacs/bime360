import { useCallback, useEffect, useState } from "react"
import { Button } from "../Button"

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

export const PrevButton = ({ children, className = "", ...restProps }) => {
  return (
    <Button
      className={`z-10 flex h-8 w-8 cursor-pointer touch-manipulation appearance-none items-center justify-center rounded-[10px] bg-primary-400 text-white no-underline disabled:bg-mercury-400 sm:h-12 sm:w-12 sm:rounded-xl md:h-16 md:w-16 md:rounded-2xl ${className}`}
      type="button"
      {...restProps}
    >
      <svg className="h-1/3 w-1/3" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      <span className="sr-only">Show next slide</span>
      {children}
    </Button>
  )
}

export const NextButton = ({ children, className = "", ...restProps }) => {
  return (
    <Button
      className={`z-10 flex h-8 w-8 cursor-pointer touch-manipulation appearance-none items-center justify-center rounded-[10px] bg-primary-400 text-white no-underline disabled:bg-mercury-400 sm:h-12 sm:w-12 sm:rounded-xl md:h-16 md:w-16 md:rounded-2xl ${className}`}
      type="button"
      {...restProps}
    >
      <svg className="h-1/3 w-1/3" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      <span className="sr-only">Show next slide</span>
      {children}
    </Button>
  )
}
