import Meals from "../data/meals.json"

function FreeMeals() {
	return (
		<>
			<h1 className="font-DMsans text-2xl	text-gray-800 mt-10 ml-44">
				FREE MEALS on airasia food
			</h1>
			<div className="font-DMsans w-4/5 ml-44 mt-4 flex">
				{Meals.map((meal) => (
					<div className="border-solid border-2 rounded-xl w-80 mr-3 hover:shadow-lg">
						<div className="card-zoom">
							<div key={meal.id}>
								<img className="card-zoom-image" src={meal.image} />
							</div>
						</div>
						<div className="m-5">
							<h1 className="">{meal.title}</h1>
							<a className="text-red-500	">{meal.button}</a>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default FreeMeals
