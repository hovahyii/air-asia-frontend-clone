import {useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import React, {useRef,  useState, useEffect} from "react"
import slides from "../data/slides.json"

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [pause, setPause] = useState(false)
	let onSizeChangeSetInterval: NodeJS.Timer

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

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  useEffect(() => {
    onSizeChangeSetInterval = setInterval(() => {
			if (!pause && slider) {
				slider.next()
			}
		}, 2000)
    return () => {
      clearInterval(onSizeChangeSetInterval)
    }
  }, [pause, slider])

  return (
		<>
			<div
				ref={sliderRef as React.RefObject<HTMLDivElement>}
				className="keen-slider w-4/5 ml-44 mt-8  xl:w-11/12 xl:h-full xl:m-14 xl:mt-8 md:w-full md:m-0 md:mt-8 lg:h-48 lg:ml-0"
			>
				{slides.map((slide) => (
					<div className="keen-slider__slide">
						<img
							key={slide.id}
							src={slide.image}
							alt={slide.title}
							className="object-cover w-full h-72 lg:object-center"
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
