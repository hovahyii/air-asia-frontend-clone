import Hotels from "../data/hotels.json"

function Hotel() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800  w-full mt-10 ml-60">
				Hotel deals you can't miss
			</h1>
			<div className="font-DMsans w-full w-full ml-60 mt-4 flex">
				{Hotels.map((hotel) => (
					<div className=" border-solid border-2 rounded-xl w-72 mr-3 hover:shadow-lg">
						<div key={hotel.id}>
							<img className="rounded object-cover" src={hotel.image} />
						</div>
						<div className="m-5">
							<p className="text-xs text-blue-800	">
								Free cancellation available
							</p>
							<h1 className="">{hotel.location}</h1>
							<p className="text-xs text-grey-500	">Starts from</p>
							<p className="text-2xl">MYR {hotel.price}</p>
							<p className="text-xs text-grey-500	">per night</p>
							<a className="text-red-500">View Hotel</a>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Hotel
