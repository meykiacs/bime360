import { useCarousel } from "@/hooks/useCarousel"

const Carousel = ({ slides, interval = 5000 }) => {
  const length = slides.length
  const [active, setActive, handlers, style] = useCarousel(length, interval)
  console.log(active)
  return (
    length > 0 && (
      <div className="carousel">
        <div className="carousel-content" {...handlers} style={style}>
          <div className="carousel-item">{slides[slides.length - 1]}</div>
          {slides.map((slide, index) => (
            <div className={`${active !== index ? 'hidden' : 'block' }`} key={index}>
              {slide}
            </div>
          ))}
          <div className="carousel-item">{slides[0]}</div>
        </div>
        <ol className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              onClick={() => setActive(index)}
              key={index}
              className={`${active === index ? "active" : ""}`}
            >
              h
            </button>
          ))}
        </ol>
      </div>
    )
  )
}

export default Carousel
