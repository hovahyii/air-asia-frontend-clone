import Deliveries from "../data/deliveries.json"

function Delivery() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800 uppercase mt-10 ml-44">
				free delivery
			</h1>
			<div className="font-DMsans w-4/5 ml-44 mt-4 flex">
				{Deliveries.map((delivery) => (
					<div className=" border-solid border-2 rounded-xl w-80 mr-3 hover:shadow-lg">
						<div key={delivery.id}>
							<img
								className="rounded h-44 object-cover w-full"
								src={delivery.image}
							/>
						</div>
						<div className="m-5 pb-16 relative">
							<h1 className="">{delivery.title}</h1>
							<p className="text-xs absolute">{delivery.subtitle}</p>
							<a className="text-red-500 absolute float-left my-8">
								{delivery.button}
							</a>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Delivery
