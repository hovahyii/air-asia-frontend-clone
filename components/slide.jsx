import {useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import React from "react"
import slides from "../data/slides.json"

const Slides = () => {

 const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
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
							className=" object-cover  w-full  h-60 "
						></img>
					</div>
				))}
			</div>
		</>
	)
}

export default Slides
