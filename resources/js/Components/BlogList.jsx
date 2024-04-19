import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"
import { range } from "@/utils"

export default function BlogList() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640) // Initial value

  useEffect(() => {
    const checkScreenSize = () => {
      const computedStyles = window.getComputedStyle(document.body)
      // Tailwind adds a --tw-screens-sm property to the body when the viewport is at least 'sm'
      const isSmall =
        computedStyles.getPropertyValue("--tw-screens-sm") === "null"
      setIsSmallScreen(isSmall)
    }

    window.addEventListener("resize", checkScreenSize)
    checkScreenSize() // Check immediately on mount

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const items = range(isSmallScreen ? 2 : 3)

  return (
    <div className="mx-auto flex w-[820px] items-center justify-center gap-5 bg-transparent sm:w-full">
      {items.map((i) => (
        <BlogCard key={i} />
      ))}
    </div>
  )
}
