import Travels from "../data/travel.json"

function Travel() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800   mt-10 ml-44">
				Travel &amp; Promotions
			</h1>
			<div className="font-DMsans w-4/5 ml-44 mt-4 flex">
				{Travels.map((travel) => (
					<div className=" border-solid border-2 rounded-xl w-80 mr-3 hover:shadow-lg">
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
