import Image from "next/image"
import {Fragment} from "react"
import {Menu, Transition} from "@headlessui/react"
import React, {useState, useEffect} from "react"

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

const NavBar = () => {
	const [active, setActive] = useState(false)

	const statusClass = active
		? "text-red-500 border-b-2 border-red-500"
		: "border-0	text-gray-500 "

	return (
		<nav className="font-DMsans text-center content-center px-16 lg:px-2 bg-white lg:border lg:w-full lg:h-14 lg:shadow-xl	lg:grid lg:justify-items-stretch">
			<div className="invisible  lg:visible lg:absolute lg:justify-self-start ">
				<div className=" lg:pt-4 lg:pb-2 ">
					<a
						href="#"
						className="inline-flex  text-md no-underline  hover:text-gray-500 mr-2 px-2"
					>
						<p className="mr-2">
							<i className="fa fa-bars fa-lg"></i>
						</p>
					</a>
				</div>
			</div>

			<div className="flex items-center flex-shrink-0  lg:absolute lg:justify-self-center lg:pt-0 xl:float-left ">
				<Image
					src="/logos/airasiacom_logo.svg"
					width="150"
					height="60"
					alt="Air Asia Logo"
				/>
			</div>

			<div className="invisible lg:visible lg:absolute lg:justify-self-end ">
				<div className=" lg:pt-4 lg:pb-2 ">
					<a
						href="#"
						className="inline-flex  text-md no-underline text-red-500 hover:text-gray-500 mr-2 px-2"
					>
						<p className="mr-2">
							<i className="fa fa-user-circle fa-lg"></i>
						</p>
					</a>
				</div>
			</div>

			<ul className="lg:invisible flex  float-right ">
				<li className=" pt-2 pb-2">
					<a
						className="text-md no-underline text-gray-500 hover:text-red-500 ml-2 px-2"
						href="#"
					>
						Explore
					</a>
				</li>
				<li className=" pt-2 pb-2">
					<a
						href="#"
						className="text-md no-underline text-gray-500 hover:text-red-500  ml-2 px-2"
					>
						My Bookings
					</a>
				</li>
				<li className=" pt-2 pb-2">
					<a
						href="#"
						className="text-md no-underline  text-gray-500 hover:text-red-500 ml-2 px-2"
					>
						Check-in
					</a>
				</li>

				<li className=" pt-2 pb-2">
					<a
						href="#"
						className="text-md no-underline text-gray-500 hover:text-red-500 ml-2 px-2"
					>
						Flight Status
					</a>
				</li>
				<li className=" pt-2 pb-2">
					<a
						href="#"
						className="text-md no-underline text-gray-500 hover:text-red-500 ml-2 px-2"
					>
						Support
					</a>
				</li>

				<li className="border-r-2 border-l-2 mx-2 pt-2 pb-2">
					<Menu as="div" className="z-10 relative inline-block text-left ">
						<Menu.Button>
							<button
								onClick={() => setActive(!active)}
								className={` inline-flex justify-between text-md hover:text-red-500 ml-2 mr-2 ${statusClass}`}
							>
								<p className="px-1">
									<i className="fa fa-globe"></i>
								</p>
								<p className="px-2">EN / MYR</p>
								<p className="px-2">
									<i
										className={active ? "fa fa-angle-up" : "fa fa-angle-down"}
									></i>
								</p>
							</button>
						</Menu.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="py-1">
									<Menu.Item>
										{({active}) => (
											<a
												href="#"
												className={classNames(
													active
														? "bg-gray-100 text-gray-900 "
														: "text-gray-700 ",
													"block px-4 py-2 mt-2  flex text-md -mx-1"
												)}
											>
												<p className="px-1 ">
													<i className="fa fa-globe"></i>
												</p>
												<p className="px-2 ">English</p>
												<p className="px-36 absolute">
													<i className="fa fa-angle-right"></i>
												</p>
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({active}) => (
											<a
												href="#"
												className={classNames(
													active
														? "bg-gray-100 text-gray-900"
														: "text-gray-700",
													"block px-4 mb-2 py-2 flex text-md -mx-1"
												)}
											>
												<p className="px-1 ">
													<i className="fa fa-dollar"></i>
												</p>
												<p className="px-2 ">MYR RM</p>
												<p className="px-36 absolute">
													<i className="fa fa-angle-right"></i>
												</p>
											</a>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</li>

				<li className=" pt-2 pb-2 ">
					<a
						href="#"
						className="inline-flex  text-md no-underline text-red-500 hover:text-gray-500 mr-2 px-2"
					>
						<p className="mr-2">
							<i className="fa fa-user-circle"></i>
						</p>
						<p>Login/Signup</p>
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
