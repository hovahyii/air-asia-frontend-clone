import Categories from "../data/categories.json"
import React, { useState, useEffect } from "react"

function Products() {


	const [start, setStart] = useState(0)
	const [end, setEnd] = useState(8)
	const [show, setShow] = useState(true)

	const showNextItems = () => {
		setStart((prevValue) => prevValue + 4)
		setEnd((prevValue) => prevValue + 4)
		setShow(show => !show)
	}

	const showPreviousItems = () => {
		setStart((nextValue) => nextValue - 4)
		setEnd((nextValue) => nextValue - 4)
		setShow(show => !show)
	}



	
	return (
		<>
			<div className="font-DMsans w-4/5 mt-10 ml-52 flex xl:w-full xl:ml-14 lg:w-full ">
				{Categories.slice(start, end).map((category) => (
					<div>
						<div delay-1000 key={category.id} className="circle-card-zoom ">
							<img src={category.image} className="circle-card-zoom-image" />
						</div>
						<p className="text-center m-2 text-xs md:m-0 md:ml-12">
							{category.title}
						</p>
					</div>
				))}

				{show ? (
					<button
						onClick={showNextItems}
						className="border-2	border-gray-100 rounded w-8 h-8 shadow-lg mt-14 float-right -mx-2 bg-white"
					>
						<div>
							<div className="object-center ">
								<i className="fa fa-angle-right fa-lg"></i>
							</div>
						</div>
					</button>
				) : (
					<button
						onClick={showPreviousItems}
						className="border-2	border-gray-100 rounded w-8 h-8 shadow-lg mt-14 -mx-6 float-left absolute bg-white"
					>
						<div>
							<div className="object-center ">
								<i className="fa fa-angle-left fa-lg"></i>
							</div>
						</div>
					</button>
				)}

			
			</div>
		</>
	)
}

export default Products
