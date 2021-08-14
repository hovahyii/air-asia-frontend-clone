import fresh from "../data/fresh.json"

function Fresh() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800  w-full mt-10 ml-60">
				Fresh
			</h1>
			<div className="font-DMsans w-full ml-60 mt-4 flex">
				{fresh.slice(0, 3).map((fresh) => (
					<div
						key={fresh.id}
						className="border-solid border-2 rounded-xl w-72 mr-3 hover:shadow-lg hover:shadow-lg"
					>
						<label className="text-xs bg-red-100 text-red-500 p-0.8 text-center pl-1 pr-2 m-2 absolute">
							{fresh.label}
						</label>
						<img className="rounded object-cover z-10" src={fresh.image} />

						<div className="m-5">
							<h1 className="">{fresh.title}</h1>
						</div>
					</div>
				))}
				{fresh.slice(3, 4).map((fresh) => (
					<div
						key={fresh.id}
						className="border-solid border-2 rounded-xl w-72 hover:shadow-lg hover:shadow-lg "
					>
						<label className="text-xs bg-red-100 text-red-500 p-0.8 text-center pl-1 pr-2 m-2  absolute">
							{fresh.label}
						</label>
						<img className="rounded object-cover z-10" src={fresh.image} />

						<div className="m-5">
							<h1 className="">{fresh.title}</h1>
						</div>
					</div>
				))}
				<div className="mt-28">
					<button className="border-2 rounded w-8 h-8 shadow-lg ">
						<div>
							<div className="">
								<i className="fa fa-angle-right fa-lg"></i>
							</div>
						</div>
					</button>
				</div>
			</div>
		</>
	)
}

export default Fresh
