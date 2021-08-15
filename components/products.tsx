import Categories from "../data/categories.json"

function Products() {
	return (
		<div className="font-DMsans mt-10 ml-52 flex ">
			{Categories.slice(0, 7).map((category) => (
				<div key={category.id} className="pr-10">
					<img src={category.image} className="rounded-full w-28" />
					<p className="text-center m-2 text-xs ">{category.title}</p>
				</div>
			))}
			{Categories.slice(7, 8).map((category) => (
				<div key={category.id} className="pr-2">
					<img src={category.image} className="rounded-full w-28" />
					<p className="text-center m-2 text-xs ">{category.title}</p>
				</div>
			))}

			<button className="border-2	border-gray-100 rounded w-8 h-8 shadow-lg mt-8  bg-white">
				<div>
					<div className="object-center  p-1">
						<i className="fa fa-angle-right fa-lg"></i>
					</div>
				</div>
			</button>
		</div>
	)
}

export default Products
