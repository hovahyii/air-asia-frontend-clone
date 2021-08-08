import Travels from "../data/travel.json"

function Travel() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800 uppercase w-full mt-10 ml-60">
				Travel &amp; Promotions
			</h1>
			<div className="font-DMsans w-full w-full ml-60 mt-4 flex">
				{Travels.map((travel) => (
					<div className=" border-solid border-2 rounded-xl w-72 mr-3 hover:shadow-lg">
						<div key={travel.id}>
							<img className="rounded object-cover" src={travel.image} />
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
