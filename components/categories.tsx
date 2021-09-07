import Image from "next/image"
import {Dialog, Transition} from "@headlessui/react"
import {Fragment, useState} from "react"

const Categories = () => {

	let [isOpen, setIsOpen] = useState(false)

	const statusClass = isOpen
		? "show border xl:w-5/6 xl:ml-24 lg:w-11/12  lg:ml-12"
		: "hidden"

	return (
		<>
			<div
				className={
					isOpen
						? "font-DMsans border z-0 mt-24 ml-52 flex w-3/4 bg-white flex justify-center shadow-lg  xl:w-5/6 xl:ml-24 lg:mt-12 lg:w-11/12  lg:ml-12"
						: "font-DMsans z-0 mt-24 ml-52 flex w-3/4 bg-white flex justify-center xl:w-5/6 xl:ml-24 lg:mt-12 lg:w-11/12 lg:ml-12 sm:grid sm:grid-cols-4 sm:gap-4 "
				}
			>
				<a href="" className="pr-12 sm:justify-items-center	">
					<label className="grid-rows-1 text-xs bg-red-100 text-red-500 p-0.8 text-center absolute -mt-2 pl-1 pr-1 ">
						FREE DEL
					</label>
					<div className="grid-rows-2	flex mt-4 ">
						<img
							className="justify-center "
							src="https://a.staticaa.com/images/misc/product-tiles/ourfood_flat.svg"
							width="30"
							height="30"
						></img>
						<p className="p-3 ">Food</p>
					</div>
				</a>
				<a href="" className="pr-8">
					<label className="grid-rows-1 text-xs bg-red-100 text-red-500 p-0.8 text-center absolute -mt-2 pl-1  pr-1">
						Penang2U
					</label>
					<div className="grid-rows-2	flex mt-4">
						<img
							className="justify-center"
							src="https://a.staticaa.com/images/misc/product-tiles/fresh_flat.svg"
							width="30"
							height="30"
						></img>
						<p className="p-3">Fresh</p>
					</div>
				</a>
				<a href="" className="pr-8">
					<label className="grid-rows-1 text-xs bg-red-100 text-red-500 p-0.8 text-center absolute -mt-2 pl-1 pr-1">
						RM50 OFF
					</label>
					<div className="grid-rows-2	flex mt-4">
						<img
							className="justify-center"
							src="https://a.staticaa.com/images/misc/app/product-tiles/beauty_flat.svg"
							width="30"
							height="30"
						></img>
						<p className="p-3">Beauty</p>
					</div>
				</a>
				<a href="" className="pr-8">
					<label className="grid-rows-1 text-xs bg-red-100 text-red-500 p-0.8 text-center absolute -mt-2 pl-1 pr-1">
						DEALS!
					</label>
					<div className="grid-rows-2	flex mt-4">
						<img
							className="justify-center"
							src="https://a.staticaa.com/images/misc/product-tiles/money_flat.svg"
							width="30"
							height="30"
						></img>
						<p className="p-3">Money</p>
					</div>
				</a>
				<a href="" className="pr-8 md:invisible  sm:visible">
					<div className="grid-rows-2	flex mt-4 ">
						<img
							className="justify-center"
							src="https://a.staticaa.com/images/misc/product-tiles/hotel_flat.svg"
							width="30"
							height="30"
						></img>
						<p className="p-2">Hotels</p>
					</div>
				</a>
				<a href="" className="pr-8 lg:invisible  sm:visible">
					<div className="grid-rows-2	flex mt-4">
						<img
							className="justify-center"
							src="https://images.contentstack.io/v3/assets/blt81780e535e9d8b2b/blt584dab4dbeb10179/60b9a4f24d715a2522583933/azd4y-nlgmx.svg"
							width="30"
							height="30"
						></img>
						<p className="p-2">BigXchange</p>
					</div>
				</a>
				<a href="" className="pr-8 lg:invisible  sm:visible">
					<div className="grid-rows-2	flex mt-4">
						<img
							className="justify-center"
							src="https://a.staticaa.com/images/misc/product-tiles/flight_flat.svg"
							width="30"
							height="30"
						></img>
						<p className="p-2">Flight</p>
					</div>
				</a>
				<button type="button" onClick={() => setIsOpen(!isOpen)} className="">
					<div className="grid-rows-2	flex mt-2">
						<img
							className="justify-center"
							src="https://storage.googleapis.com/airasia-repository-prod/images/misc/product-tiles/showall_flat.svg"
							width="30"
							height="30"
						></img>
						<p className="p-2  align-middle">Show All</p>
					</div>
				</button>
			</div>
			<div
				className={`font-DMsans z-0  ml-52  w-3/4 z-10 bg-white border-0	shadow-lg	 p-8 absolute z-20 ${statusClass}`}
			>
				<div className="text-gray-500	">All other categories</div>
				<div className="flex ">
					<a href="" className="pr-16 pl-12">
						<div className="grid-rows-2	flex mt-7">
							<img
								className="justify-center"
								src="https://a.staticaa.com/images/misc/app/product-tiles/redbeat_flat-20210602.svg"
								width="30"
								height="30"
							></img>
							<p className="p-4 ">Academy</p>
						</div>
					</a>
					<a href="" className="pr-14">
						<label className="grid-rows-1 text-xs bg-red-100 text-red-500 p-0.8 text-center pl-1 pr-1 mt-3 absolute">
							DEALS!
						</label>
						<div className="grid-rows-2	flex mt-7">
							<img
								className="justify-center"
								src="https://a.staticaa.com/images/misc/product-tiles/money_flat.svg"
								width="30"
								height="30"
							></img>
							<p className="p-4">Money</p>
						</div>
					</a>
					<a href="" className="pr-16 pl-4">
						<div className="grid-rows-2	flex mt-7">
							<img
								className="justify-center"
								src="https://a.staticaa.com/images/misc/product-tiles/health_flat.svg"
								width="30"
								height="30"
							></img>
							<p className="p-4">Health</p>
						</div>
					</a>
					<a href="" className="pr-16 pl-4">
						<div className="grid-rows-2	flex mt-7">
							<img
								className="justify-center"
								src="https://a.staticaa.com/images/misc/product-tiles/ikhlas-flat.svg"
								width="30"
								height="30"
							></img>
							<p className="p-4">Ikhlas</p>
						</div>
					</a>
					<a href="" className="pr-16 pl-4">
						<div className="grid-rows-2	flex mt-7">
							<img
								className="justify-center"
								src="https://a.staticaa.com/images/misc/product-tiles/ourshop_flat.svg"
								width="30"
								height="30"
							></img>
							<p className="p-4">Shop</p>
						</div>
					</a>
				</div>
				<div className="flex -mt-6">
					<a href="" className="pr-8 pl-12">
						<div className="grid-rows-2	flex mt-7">
							<img
								className="justify-center"
								src="https://images.contentstack.io/v3/assets/blt81780e535e9d8b2b/bltf9b061757c4d6fa4/60b9a4f2069dc90a315f852a/at4fp-p7ph1.svg"
								width="30"
								height="30"
							></img>
							<p className="p-4">Big Rewards</p>
						</div>
					</a>
					<a href="" className="pr-8 pl-4">
						<div className="grid-rows-2	flex mt-7">
							<img
								className="justify-center"
								src="https://a.staticaa.com/images/misc/product-tiles/deals_flat.svg"
								width="30"
								height="30"
							></img>
							<p className="p-4">Unlimited</p>
						</div>
					</a>
					<a href="" className="pr-16 pl-4">
						<div className="grid-rows-2	flex mt-7">
							<img
								className="justify-center"
								src="https://a.staticaa.com/images/misc/product-tiles/explore_flat.svg"
								width="30"
								height="30"
							></img>
							<p className="p-4">Explore</p>
						</div>
					</a>
				</div>
			</div>
		</>
	)
}

export default Categories
