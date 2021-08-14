import Categories from "../data/categories.json"

function Products() {
	return (
		<div className="font-DMsans w-full mt-10 ml-60 flex ">
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
			<button className="border-2 rounded w-8 h-8 shadow-lg mt-8 ">
				<div>
					<div className="object-center">
						<i className="fa fa-angle-right fa-lg"></i>
					</div>
				</div>
			</button>
		</div>
	)
}

export default Products
