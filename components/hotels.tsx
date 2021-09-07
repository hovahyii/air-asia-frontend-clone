import Hotels from "../data/hotels.json"

function Hotel() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800 mt-10 ml-44 xl:w-11/12 xl:ml-14 sm:ml-2 sm:w-full">
				Hotel deals you can't miss
			</h1>
			<div className="font-DMsans w-4/5 ml-44 mt-4 flex xl:w-11/12 xl:ml-14 sm:ml-2 sm:w-full">
				{Hotels.map((hotel) => (
					<div className="border-solid border-2 rounded-xl w-full mr-3 hover:shadow-lg ">
						<div key={hotel.id} className="card-zoom">
							<img className="card-zoom-image" src={hotel.image} />
						</div>
						<div className="mb-5 p-6">
							<p className="text-xs text-blue-800	">
								Free cancellation available
							</p>
							<h1 className="pb-4">{hotel.location}</h1>
							<p className="text-xs text-gray-400	float-right">Starts from</p>
							<p className="text-2xl float-right -mx-16 my-6">
								MYR {hotel.price}
							</p>
							<div className="my-16">
								<p className="text-xs text-gray-400	 float-right">per night</p>
								<a href="" className="text-red-500  float-left">
									View Hotel
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Hotel
