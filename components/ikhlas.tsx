import ikhl from "../data/ikhlas.json"

function Ikhlas() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800 uppercase  mt-10 ml-44 xl:w-11/12 xl:ml-14  sm:ml-2 sm:w-full">
				IKHLAS
			</h1>
			<div className="font-DMsans w-4/5 ml-44 mt-4 flex xl:w-11/12 xl:ml-14 sm:ml-2 sm:w-full">
				{ikhl.map((ikhlas) => (
					<div className=" border-solid border-2 rounded-xl w-full mr-3 hover:shadow-lg">
						<div key={ikhlas.id} className="card-zoom">
							<img className="card-zoom-image" src={ikhlas.image} />
						</div>
						<div className="m-5 pb-16 relative lg:m-2 lg:pb-24 md:pb-28">
							<h1 className="">{ikhlas.title}</h1>
							<p className="text-xs absolute">{ikhlas.subtitle}</p>
							<a className="text-red-500 absolute float-left my-12 lg:my-16 md:my-20 ">
								{ikhlas.button}
							</a>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Ikhlas
