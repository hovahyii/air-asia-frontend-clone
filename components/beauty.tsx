import Beauty from "../data/beauty.json"

function Delivery() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800 mt-10 ml-44">Beauty</h1>
			<div className="font-DMsans w-4/5 ml-44 mt-4 flex">
				{Beauty.slice(0, 3).map((beauty) => (
					<div className=" border-solid border-2 rounded-xl w-80 mr-3 hover:shadow-lg   z-0 ">
						<div key={beauty.id}>
							<img
								className="rounded object-cover h-44 w-full"
								src={beauty.image}
							/>
						</div>
						<div className="m-5">
							<h1 className="">{beauty.title}</h1>
						</div>
					</div>
				))}
				{Beauty.slice(3, 4).map((beauty) => (
					<div className=" border-solid border-2 rounded-xl w-80 hover:shadow-lg   z-0 ">
						<div key={beauty.id}>
							<img className="rounded object-cover h-44 w-full" src={beauty.image} />
						</div>
						<div className="m-5">
							<h1 className="">{beauty.title}</h1>
						</div>
					</div>
				))}

				<div className="mt-28 ">
					<button className="border-2	border-gray-100  rounded w-8 h-8 z-10 shadow-lg  absolute -mx-4	 bg-white	 ">
						<div>
							<div className="object-center p-1">
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
