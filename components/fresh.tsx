import fresh from "../data/fresh.json"

function Fresh() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800  mt-10 ml-44">Fresh</h1>
			<div className="font-DMsans w-4/5  ml-44 mt-4 flex">
				{fresh.slice(0, 3).map((fresh) => (
					<div
						key={fresh.id}
						className="border-solid border-2 rounded-xl w-80 mr-3 hover:shadow-lg hover:shadow-lg"
					>
						<label className="text-xs bg-red-100 text-red-500 p-0.8 text-center pl-1 pr-2 m-2 absolute">
							{fresh.label}
						</label>
						<img
							className="rounded h-44 object-cover w-full"
							src={fresh.image}
						/>

						<div className="m-5">
							<h1 className="">{fresh.title}</h1>
						</div>
					</div>
				))}
				{fresh.slice(3, 4).map((fresh) => (
					<div
						key={fresh.id}
						className="border-solid border-2 rounded-xl w-80 hover:shadow-lg hover:shadow-lg "
					>
						<label className="text-xs bg-red-100 text-red-500 p-0.8 text-center pl-1 pr-2 m-2  absolute">
							{fresh.label}
						</label>
						<img
							className="rounded  h-44 object-cover w-full"
							src={fresh.image}
						/>

						<div className="m-5">
							<h1 className="">{fresh.title}</h1>
						</div>
					</div>
				))}
				<div className="mt-28 ">
					<button className="border-2	border-gray-100  rounded w-8 h-8 z-10 shadow-lg  absolute -mx-4	 bg-white ">
						<div>
							<div className="object-center  p-1">
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
