import Travels from "../data/travel.json"

function Travel() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800   mt-10 ml-44 xl:w-11/12 xl:ml-14  sm:ml-2 sm:w-full">
				Travel &amp; Promotions
			</h1>
			<div className="font-DMsans w-4/5 ml-44 mt-4 flex xl:w-11/12 xl:ml-14 md:pb-28 sm:ml-2 sm:w-full">
				{Travels.map((travel) => (
					<div className=" border-solid border-2 rounded-xl w-full mr-3 hover:shadow-lg">
						<div key={travel.id} className="card-zoom">
							<img className="card-zoom-image" src={travel.image} />
						</div>
						<div className="m-5">
							<h1 className="">{travel.title}</h1>
							<p className="text-xs">{travel.subtitle}</p>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Travel
