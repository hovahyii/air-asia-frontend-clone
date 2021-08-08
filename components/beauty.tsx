import Beauty from "../data/beauty.json"

function Delivery() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800 w-full mt-10 ml-60">
				Beauty
			</h1>
			<div className="font-DMsans w-full w-full ml-60 mt-4 flex">
				{Beauty.map((beauty) => (
					<div className=" border-solid border-2 rounded-xl w-72 mr-3 hover:shadow-lg">
						<div key={beauty.id}>
							<img className="rounded object-cover" src={beauty.image} />
						</div>
						<div className="m-5">
							<h1 className="">{beauty.title}</h1>
						
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Delivery
