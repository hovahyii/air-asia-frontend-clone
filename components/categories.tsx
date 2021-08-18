import Image from "next/image"

const Categories = () => {
	return (
		<div className="font-DMsans z-0 mt-8 ml-56 flex  w-full">
			<div className="pr-12">
				<label className="grid-rows-1 text-xs bg-red-100 text-red-500 p-0.8 text-center pl-1 pr-1">
					FREE DEL
				</label>
				<div className="grid-rows-2	flex">
					<Image
						className="justify-center"
						src="misc/product-tiles/ourfood_flat.svg"
						width="30"
						height="30"
					></Image>
					<p className="p-3">Food</p>
				</div>
			</div>
			<div className="pr-12">
				<label className="grid-rows-1 text-xs bg-red-100 text-red-500 p-0.8 text-center pl-1 pr-1">
					Penang2U
				</label>
				<div className="grid-rows-2	flex">
					<Image
						className="justify-center"
						src="misc/product-tiles/fresh_flat.svg"
						width="30"
						height="30"
					></Image>
					<p className="p-3">Fresh</p>
				</div>
			</div>
			<div className="pr-12">
				<label className=" grid-rows-1 text-xs bg-red-100 text-red-500 p-0.8 text-center pl-1 pr-1">
					RM50 OFF
				</label>
				<div className="grid-rows-2	flex">
					<Image
						className="justify-center"
						src="misc/app/product-tiles/beauty_flat.svg"
						width="30"
						height="30"
					></Image>
					<p className="p-3">Beauty</p>
				</div>
			</div>
			<div className="pr-12">
				<label className="grid-rows-1 text-xs bg-red-100 text-red-500 p-0.8 text-center pl-1 pr-1">
					DEALS!
				</label>
				<div className="grid-rows-2	flex">
					<Image
						className="justify-center"
						src="misc/product-tiles/money_flat.svg"
						width="30"
						height="30"
					></Image>
					<p className="p-3">Money</p>
				</div>
			</div>
			<div className="pr-12">
				<div className="grid-rows-2	flex mt-7">
					<Image
						className="justify-center"
						src="misc/product-tiles/hotel_flat.svg"
						width="30"
						height="30"
					></Image>
					<p className="p-2">Hotels</p>
				</div>
			</div>
			<div className="pr-12">
				<div className="grid-rows-2	flex mt-7">
					<img
						className="justify-center"
						src="https://images.contentstack.io/v3/assets/blt81780e535e9d8b2b/blt584dab4dbeb10179/60b9a4f24d715a2522583933/azd4y-nlgmx.svg"
						width="30"
						height="30"
					></img>
					<p className="p-2">BigXchange</p>
				</div>
			</div>
			<div className="pr-12">
				<div className="grid-rows-2	flex mt-7">
					<Image
						className="justify-center"
						src="misc/product-tiles/flight_flat.svg"
						width="30"
						height="30"
					></Image>
					<p className="p-2">Flight</p>
				</div>
			</div>
			<div className="pr-12">
				<div className="grid-rows-2	flex mt-7">
					<img
						className="justify-center"
						src="https://storage.googleapis.com/airasia-repository-prod/images/misc/product-tiles/showall_flat.svg"
						width="30"
						height="30"
					></img>
					<p className="p-2">Show All</p>
				</div>
			</div>
		</div>
	)
}

export default Categories
