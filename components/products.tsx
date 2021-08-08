import Categories from '../data/categories.json'

function Products() {
	return (
		<div className="font-DMsans w-full mt-10 ml-60 flex ">
			{Categories.map((category) => (
				<div key={category.id} className="pr-8">
					<img src={category.image} className="rounded-full w-28" />
					<p className="text-center m-2 text-xs ">{category.title}</p>
				</div>
			))}
		</div>
	)
}

export default Products
 
