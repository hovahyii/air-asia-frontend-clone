import Image from "next/image"

const Footer = () => {
	return (
		<>
			<section className=" bg-gray-50	font-DMsans w-full  ">
				<div className="mt-8 ml-40 flex">
					<h1 className="mt-8 mb-8 text-3xl text-gray-600 	">
						Book your Flights, Hotels &amp; SNAP
					</h1>
				</div>
				<hr className="ml-40  w-4/5" />
				<div className="grid grid-rows-3 grid-flow-col gap-24 ml-40 mt-8 w-4/5 mb-8 text-xs	 text-gray-500">
					<ul className="row-start-1 row-end-4	">
						<li className="mb-2	">Travel Information</li>
						<li className="mb-2	">Airports and terminals</li>
						<li className="mb-2	">Baggage</li>
						<li className="mb-2">Check-in information</li>
						<li className="mb-2">Our fares</li>
						<li className="mb-2">Flight status</li>
						<li className="mb-2">Inflight meals</li>
						<li className="mb-2">Inflight entertainment</li>
						<li className="mb-2">Payment channels</li>
						<li className="mb-2">Seat options</li>
						<li className="mb-2">Tax invoice</li>
						<li className="mb-2">AirAsia India tariff sheet</li>
						<li>Fees and Charges</li>
					</ul>
					<ul className="row-start-1  row-end-4 ">
						<li className="mb-2">Our Products and Services</li>
						<li className="mb-2">AirAsia Unlimited Deals</li>
						<li className="mb-2">IKHLAS</li>
						<li className="mb-2">Cheap flights</li>
						<li className="mb-2">Red Carpet</li>
						<li className="mb-2">Premium Up</li>
						<li className="mb-2">Freedom Flyer Programme</li>
						<li className="mb-2">BIG Points</li>
						<li className="mb-2">BIG Xchange</li>
						<li className="mb-2">Register as an agent</li>
						<li className="mb-2">Agent login</li>
						<li className="mb-2">Charter</li>
						<li>Download e-catalog</li>
					</ul>
					<ul className="row-start-1  row-end-4 ">
						<li className="mb-2">Partners' Product</li>
						<li className="mb-2">Delivery Partner Sign-Up</li>
						<li className="mb-2">airasia Card</li>
						<li className="mb-2">Luggage delivery</li>
						<li className="mb-2">BigPay</li>
						<li className="mb-2">CIMB Savers</li>
						<li className="mb-2">AirAsia Travel Protection</li>
						<li>Santan ASEAN Restaurant</li>
					</ul>
					<ul className="row-start-1   row-end-4">
						<li className="mb-2">About Us</li>
						<li className="mb-2">Ad space</li>
						<li className="mb-2">AirAsia Foundation</li>
						<li className="mb-2">Careers</li>
						<li className="mb-2">Investor relations</li>
						<li className="mb-2">Newsroom</li>
						<li className="mb-2">Sales office</li>
						<li className="mb-2">Promotions</li>
						<li>Food Promotions</li>
					</ul>
				</div>
				<hr className="ml-40  w-4/5" />
				<div className="grid grid-cols-6 gap-4  ml-40 mt-8 w-4/5 mb-8">
					<div className="col-start-1 col-end-3  col-span-2">
						<h1 className="text-left text-xs	 text-gray-500">
							airasia the Asean super{" "}
						</h1>
						<ul className="flex mt-2">
							<li className=" mr-2">
								<img src="https://a.staticaa.com/images/logo/app-store-badge.png"></img>
							</li>
							<li className=" mr-2">
								<img src="https://a.staticaa.com/images/logo/google-play-badge.png"></img>
							</li>
							<li className=" mr-2">
								<img src="https://a.staticaa.com/images/logo/huawei-app-gallery-badge.png"></img>
							</li>
						</ul>
					</div>
					<div className="col-end-7 col-span-2 ">
						<h1 className="text-right text-xs	 text-gray-500">
							Connect with Us
						</h1>
						<ul className="flex mt-2 justify-end	">
							<li className=" mr-2">
								<img src="https://a.staticaa.com/images/logo/facebook-icon.png"></img>
							</li>
							<li className=" mr-2">
								<img src="https://a.staticaa.com/images/logo/twitter-icon.png"></img>
							</li>
							<li className=" mr-2">
								<img src="https://a.staticaa.com/images/logo/instagram-icon.png"></img>
							</li>
							<li className=" mr-2">
								<img src="https://a.staticaa.com/images/logo/youtube-icon.png"></img>
							</li>
							<li className=" mr-2">
								<img src="https://a.staticaa.com/images/logo/linkedin-icon.png"></img>
							</li>
							<li className="">
								<img src="https://a.staticaa.com/images/logo/pinterest-icon.png"></img>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className="ml-40 mt-8 w-4/5 mb-8 text-xs	 text-gray-500">
					<p>
						©2021 AirAsia Group Berhad. This website is owned and operated by
						AirAsia Com Travel Sdn Bhd (201301020508), a registered travel
						agency (KPK/LN License No: 8287). Your usage of this website
						indicates that you agree to be bound by our Terms and Conditions,
						Terms of Use and Privacy Statement.
					</p>
				</div>
				<div className="ml-40 mt-8 w-4/5 mb-8 text-xs">
					<ul className="flex">
						<li className="text-red-500">AirAsia Berhad (Malaysia) </li>
						<li className="mr-2 ml-2">|</li>
						<li className="text-red-500">Thai AirAsia Co. Ltd </li>
						<li className="mr-2 ml-2">|</li>
						<li className="text-red-500">PT Indonesia AirAsia </li>
						<li className="mr-2 ml-2">|</li>
						<li className="text-red-500">Philippines AirAsia Inc. </li>
						<li className="mr-2 ml-2">|</li>
						<li className="text-red-500">AirAsia (India) Limited </li>
					</ul>
				</div>
			</section>
		</>
	)
}

export default Footer
