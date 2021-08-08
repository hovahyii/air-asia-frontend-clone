import ikhl from "../data/ikhlas.json"

function Ikhlas() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800 uppercase w-full mt-10 ml-60">
				IKHLAS
			</h1>
			<div className="font-DMsans w-full w-full ml-60 mt-4 flex">
				{ikhl.map((ikhlas) => (
					<div className=" border-solid border-2 rounded-xl w-72 mr-3 hover:shadow-lg">
						<div key={ikhlas.id}>
							<img className="rounded object-cover" src={ikhlas.image} />
						</div>
						<div className="m-5">
							<h1 className="">{ikhlas.title}</h1>
							<p className="text-xs">{ikhlas.subtitle}</p>
							<a className="text-red-500">{ikhlas.button}</a>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Ikhlas
