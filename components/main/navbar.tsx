import Image from "next/image"

const NavBar = () => {
	return (
		<nav className="font-DMsans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-10 bg-white sm:items-baseline w-full">
			<div className="flex items-center flex-shrink-0 mr-6  px-10">
				<Image
					src="logos/airasiacom_logo.svg"
					width="150"
					height="60"
					alt="Air Asia Logo"
				/>
			</div>

			<ul className="px-10 flex self-center">
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

				<li className="border-r-2 border-l-2 mx-2  pt-2 pb-2">
					<a
						href="#"
						className=" inline-flex justify-between text-md no-underline text-gray-500 hover:text-red-500 ml-2 "
					>
						<p className="px-1">
							<i className="fa fa-globe"></i>
						</p>
						<p className="px-2">EN / MYR</p>
						<p className="px-2">
							<i className="fa fa-angle-down"></i>
						</p>
					</a>
				</li>

				<li className=" pt-2 pb-2">
					<a
						href="#"
						className="inline-flex  text-md no-underline  text-gray-500 hover:text-red-500 mr-2 px-2"
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
