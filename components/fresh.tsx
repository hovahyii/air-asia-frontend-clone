import fresh from "../data/fresh.json"

function Fresh() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800 mt-4 w-full mt-10 ml-60">
				Fresh
			</h1>
			<div className="font-DMsans w-full w-full ml-60 mt-4 flex">
				{fresh.map((fresh) => (
					<div className=" border-solid border-2 rounded-xl w-72 mr-3 hover:shadow-lg">
						<div className="" key={fresh.id}>
							<label className="z-20 text-xs bg-red-100 text-red-500 p-0.8 text-center pl-1 pr-1">
								{fresh.label}
							</label>
							<img className="rounded object-cover z-10" src={fresh.image} />
						</div>
						<div className="m-5">
							<h1 className="">{fresh.title}</h1>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Fresh
