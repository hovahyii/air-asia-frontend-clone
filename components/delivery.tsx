import Deliveries from "../data/deliveries.json"

function Delivery() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800 uppercase w-full mt-10 ml-60">
				free delivery
			</h1>
			<div className="font-DMsans w-full w-full ml-60 mt-4 flex">
				{Deliveries.map((delivery) => (
					<div className=" border-solid border-2 rounded-xl w-72 mr-3 hover:shadow-lg">
						<div key={delivery.id}>
							<img className="rounded object-cover" src={delivery.image} />
						</div>
						<div className="m-5">
							<h1 className="">{delivery.title}</h1>
							<p className="text-xs">{delivery.subtitle}</p>
							<a className="text-red-500	">{delivery.button}</a>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Delivery
