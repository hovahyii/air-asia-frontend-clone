import Beauty from "../data/beauty.json"

function Delivery() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800 w-full mt-10 ml-60">
				Beauty
			</h1>
			<div className="font-DMsans w-full  ml-60 mt-4 flex">
				{Beauty.slice(0, 3).map((beauty) => (
					<div className=" border-solid border-2 rounded-xl w-72 mr-3 hover:shadow-lg  z-0 ">
						<div key={beauty.id}>
							<img className="rounded object-cover" src={beauty.image} />
						</div>
						<div className="m-5">
							<h1 className="">{beauty.title}</h1>
						</div>
					</div>
				))}
				{Beauty.slice(3, 4).map((beauty) => (
					<div className=" border-solid border-2 rounded-xl w-72 hover:shadow-lg  z-0 ">
						<div key={beauty.id}>
							<img className="rounded object-cover" src={beauty.image} />
						</div>
						<div className="m-5">
							<h1 className="">{beauty.title}</h1>
						</div>
					</div>
				))}

				<div className="mt-28 z-10 ">
					<button className=" border-2 rounded w-8 h-8 shadow-lg ">
						<div>
							<div className="object-center">
								<i className="fa fa-angle-right fa-lg"></i>
							</div>
						</div>
					</button>
				</div>
			</div>
		</>
	)
}

export default Delivery
