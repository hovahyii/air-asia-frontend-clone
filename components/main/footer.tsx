import Image from "next/image"

const Footer = () => {
	return (
		<>
			<section className=" bg-gray-50	font-DMsans w-full  mt-20 ">
				<div className="ml-40 flex">
					<h1 className="mt-8 mb-8 text-3xl text-gray-600 ">
						Book your Flights, Hotels &amp; SNAP
					</h1>
				</div>
				<hr className="ml-40  w-4/5" />
				<div className="grid grid-rows-3 grid-flow-col gap-24 ml-40 mt-8 w-4/5 mb-8 text-xs	 text-gray-500">
					<ul className="row-start-1 row-end-4	">
						<li className="mb-2	"><a href="">Travel Information</a></li>
						<li className="mb-2	"><a href="">Airports and terminals</a></li>
						<li className="mb-2	"><a href="">Baggage</a></li>
						<li className="mb-2"><a href="">Check-in information</a></li>
						<li className="mb-2"><a href="">Our fares</a></li>
						<li className="mb-2"><a href="">Flight status</a></li>
						<li className="mb-2"><a href="">Inflight meals</a></li>
						<li className="mb-2"><a href="">Inflight entertainment</a></li>
						<li className="mb-2"><a href="">Payment channels</a></li>
						<li className="mb-2"><a href="">Seat options</a></li>
						<li className="mb-2"><a href="">Tax invoice</a></li>
						<li className="mb-2"><a href="">AirAsia India tariff sheet</a></li>
						<li>Fees and Charges</li>
					</ul>
					<ul className="row-start-1  row-end-4 ">
						<li className="mb-2"><a href="">Our Products and Services</a></li>
						<li className="mb-2"><a href="">AirAsia Unlimited Deals</a></li>
						<li className="mb-2"><a href="">IKHLAS</a></li>
						<li className="mb-2"><a href="">Cheap flights</a></li>
						<li className="mb-2"><a href="">Red Carpet</a></li>
						<li className="mb-2"><a href="">Premium Up</a></li>
						<li className="mb-2"><a href="">Freedom Flyer Programme</a></li>
						<li className="mb-2"><a href="">BIG Points</a></li>
						<li className="mb-2"><a href="">BIG Xchange</a></li>
						<li className="mb-2"><a href="">Register as an agent</a></li>
						<li className="mb-2"><a href="">Agent login</a></li>
						<li className="mb-2"><a href="">Charter</a></li>
						<li>Download e-catalog</li>
					</ul>
					<ul className="row-start-1  row-end-4 ">
						<li className="mb-2"><a href="">Partners' Product</a></li>
						<li className="mb-2"><a href="">Delivery Partner Sign-Up</a></li>
						<li className="mb-2"><a href="">airasia Card</a></li>
						<li className="mb-2"><a href="">Luggage delivery</a></li>
						<li className="mb-2"><a href="">BigPay</a></li>
						<li className="mb-2"><a href="">CIMB Savers</a></li>
						<li className="mb-2"><a href="">AirAsia Travel Protection</a></li>
						<li><a href="">Santan ASEAN Restaurant</a></li>
					</ul>
					<ul className="row-start-1   row-end-4">
						<li className="mb-2"><a href="">About Us</a></li>
						<li className="mb-2"><a href="">Ad space</a></li>
						<li className="mb-2"><a href="">AirAsia Foundation</a></li>
						<li className="mb-2"><a href="">Careers</a></li>
						<li className="mb-2"><a href="">Investor relations</a></li>
						<li className="mb-2"><a href="">Newsroom</a></li>
						<li className="mb-2"><a href="">Sales office</a></li>
						<li className="mb-2"><a href="">Promotions</a></li>
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
						indicates that you agree to be bound by our
						<a href="" className="text-red-500"> Terms and Conditions</a>,
						<a href="" className="text-red-500"> Terms of Use </a>
						 and <a href="" className="text-red-500"> Privacy Statement</a>.
					</p>
				</div>
				<div className="ml-40 mt-4 w-4/5 mb-8 text-xs">
					<ul className="flex">
						<li className="text-red-500">
							<a href="">AirAsia Berhad (Malaysia)</a>
						</li>
						<li className="mr-1 ml-1">|</li>
						<li className="text-red-500">
							<a href="">Thai AirAsia Co. Ltd </a>
						</li>
						<li className="mr-1 ml-1">|</li>
						<li className="text-red-500">
							<a href="">PT Indonesia AirAsia</a>
						</li>
						<li className="mr-1 ml-1">|</li>
						<li className="text-red-500">
							<a href="">Philippines AirAsia Inc.</a>
						</li>
						<li className="mr-1 ml-1">|</li>
						<li className="text-red-500">
							<a href="">AirAsia (India) Limited</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}

export default Footer
