import fresh from "../data/fresh.json"
import React, {useState, useEffect} from "react"

function Fresh() {
	const [start, setStart] = useState(0)
	const [end, setEnd] = useState(4)
	const [show, setShow] = useState(true)

	const showNextItems = () => {
		setStart((prevValue) => prevValue + 3)
		setEnd((prevValue) => prevValue + 3)
		setShow((show) => !show)
	}

	const showPreviousItems = () => {
		setStart((nextValue) => nextValue - 3)
		setEnd((nextValue) => nextValue - 3)
		setShow((show) => !show)
	}

	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800  mt-10 ml-44 xl:w-11/12 xl:ml-14  sm:ml-2 sm:w-full ">
				Fresh
			</h1>
			<div className="font-DMsans w-4/5  ml-44 mt-4 flex xl:w-11/12 xl:ml-14  sm:ml-2 sm:w-full">
				{fresh.slice(start, end).map((fresh) => (
					<div
						key={fresh.id}
						className="border-solid border-2 rounded w-full mr-3 hover:shadow-lg hover:shadow-lg"
					>
						<label className="text-xs bg-red-100 text-red-500 p-0.8 text-center z-10 pl-1 pr-2 m-2 absolute">
							{fresh.label}
						</label>
						<div className="card-zoom">
							<img className="card-zoom-image" src={fresh.image} />
						</div>

						<div className="m-5">
							<h1 className="">{fresh.title}</h1>
						</div>
					</div>
				))}

				{show ? (
					<div className="mt-28 ">
						<button
							onClick={showNextItems}
							className="border-2	border-gray-100 rounded w-8 h-8  shadow-lg  -mx-6 float-right absolute bg-white"
						>
							<div>
								<div className="object-center">
									<i className="fa fa-angle-right fa-lg"></i>
								</div>
							</div>
						</button>
					</div>
				) : (
					<button
						onClick={showPreviousItems}
						className="border-2	border-gray-100 rounded w-8 h-8 mt-28   shadow-lg -mx-6 float-left absolute bg-white"
					>
						<div>
							<div className="object-center">
								<i className="fa fa-angle-left fa-lg"></i>
							</div>
						</div>
					</button>
				)}
			</div>
		</>
	)
}

export default Fresh
