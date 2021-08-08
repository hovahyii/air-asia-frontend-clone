import {useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import React from "react"






const Slides = (props) => {

	const [pause, setPause] = React.useState(false)
	const timer = React.useRef()
	const [sliderRef, slider] = useKeenSlider({
		loop: true,
		duration: 2000,
	
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
			<div
				ref={sliderRef}
				className=" keen-slider flex justify-center align-items pt-10"
			>
				<div className="keen-slider__slide number-slide1">
					<img
						src="https://images.contentstack.io/v3/assets/blt81780e535e9d8b2b/bltcf2e483f8c2c381e/60f8f05c8af675613a4af6d4/Flights_Hero_Banner(Web)_-_EN_(2)-8.png"
						alt="Flights For Essential Travel"
						height="100%"
						width="100%"
					/>
				</div>
				<div className="keen-slider__slide number-slide2">
					<img
						src="https://images.contentstack.io/v3/assets/blt81780e535e9d8b2b/blt41c28633f8d80299/60f4287f39c36a2747aa7d01/herobanner-FRESHvoucher-19Jul2021_FINAL_Herobanner-RM429-2.jpg"
						alt="Get free airasia Fresh groceries worth RM150!"
						height="100%"
						width="100%"
					/>
				</div>
				<div className="keen-slider__slide number-slide3">
					<img
						src="https://images.contentstack.io/v3/assets/blt81780e535e9d8b2b/blt4792e7cfabb96129/60fed3d940219d481f0769a9/HeroBanner_Web_(1)_(1).jpg"
						alt="Up to 40% off on frozen food"
						height="100%"
						width="100%"
					/>
				</div>
				<div className="keen-slider__slide number-slide4">
					<img
						src="https://images.contentstack.io/v3/assets/blt81780e535e9d8b2b/blt9e9ff9da06749279/60fa8bb8429fb95880e592bb/Hero-Banner-Web_1920x280.jpg"
						alt="Payday Sale"
						height="100%"
						width="100%"
					/>
				</div>
				<div className="keen-slider__slide number-slide5">
					<img
						src="https://images.contentstack.io/v3/assets/blt81780e535e9d8b2b/bltd2fe1573ae59a7de/60ed5be12a120025e5846404/Covid-19-Awareness-Hero-Banner.jpg"
						alt="Book your Covid-19 screening in an instant"
						height="100%"
						width="100%"
					/>
				</div>
			</div>
		</>
	)
}

export default Slides
