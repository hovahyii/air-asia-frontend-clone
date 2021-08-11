import {useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import React from "react"
import slides from "../data/slides.json"

const Slides = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

 const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
		loop: true,
		initial: 0,
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide)
		},
		duration: 1000,
		dragStart: () => {
			setPause(true)
		},
		dragEnd: () => {
			setPause(false)
		},
	})

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
		<>
			<div ref={sliderRef} className="keen-slider w-3/4 ml-60 mt-8">
				{slides.map((slide) => (
					<div className="keen-slider__slide">
						<img
							key={slide.id}
							src={slide.image}
							alt={slide.title}
							className=" object-cover w-full h-72"
						></img>
					</div>
				))}
				{slider && (
					<div className="dots">
						{[...Array(slider.details().size).keys()].map((idx) => {
							return (
								<button
									key={idx}
									onClick={() => {
										slider.moveToSlideRelative(idx)
									}}
									className={"dot" + (currentSlide === idx ? " active" : "")}
								/>
							)
						})}
					</div>
				)}
			</div>
		</>
	)
}

export default Slides
