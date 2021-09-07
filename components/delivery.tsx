import Deliveries from "../data/deliveries.json"

function Delivery() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800 uppercase mt-10 ml-44 xl:w-11/12 xl:ml-14  ">
				free delivery
			</h1>

			<div className="font-DMsans w-4/5 ml-44 mt-4 flex xl:w-11/12 xl:ml-14 ">
				{Deliveries.map((delivery) => (
					<div className=" border-solid border-2 rounded-xl w-full mr-3 hover:shadow-lg  ">
						<div className="card-zoom">
							<div key={delivery.id}>
								<img
									className=" card-zoom-image md:object-content"
									src={delivery.image}
								/>
							</div>
						</div>
						<div className="m-5 pb-14 relative md:pb-20">
							<h1 className="">{delivery.title}</h1>
							<p className="text-xs absolute">{delivery.subtitle}</p>
							<a className="text-red-500 absolute float-left my-8 md:py-8">
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
