import { useRef, useEffect } from "react"
import FullBleed from "./FullBleed"

export default function ScrollableFullBleed({ children, className="" }) {
  const scrollRef = useRef()

  useEffect(() => {
    if (scrollRef.current) {
      const element = scrollRef.current
      console.log(element.scrollWidth, element.clientWidth)
      // the -1 factor is used to scroll the element to the right and is usefull if the content is rtl
      element.scrollLeft = (element.scrollWidth - element.clientWidth) * (-1) / 2
    }
  }, [])

  return (
    <FullBleed reference={scrollRef} className={`overflow-scroll ${className}`}>
      {children}
    </FullBleed>
  )
}
