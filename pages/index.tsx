import Head from 'next/head'
import Navbar from "../components/main/navbar"
import Categories from "../components/categories"
import Slides from "../components/slide"
import Products from "../components/products"
import Delivery from "../components/delivery"
import Beauty from "../components/beauty"
import FreeMeals from "../components/meals"
import Fresh from "../components/fresh"
import Hotels from "../components/hotels"
import Ikhlas from "../components/ikhlas"
import Travel from "../components/travel"
import Footer from "../components/main/footer"

export default function Home() {
  return (
		<div className="overflow-x-hidden w-full">
			<Head>
				<title>
					airasia | For Everyone | Flights, Hotels, Activities &amp; More
				</title>
				<meta charSet="UTF-8" />

				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					property="og:title"
					content="airasia | For Everyone | Flights, Hotels, Activities &amp; More"
					key="title"
				/>
				<meta
					name="description"
					content="The Asean super app for booking flights, hotels, activities, food, unlimited deals and so much more! Check out airasia.com and get only the best deals ...
"
				/>
				<meta
					name="keywords"
					content="airasia, For Everyone, Flights, Hotels, Activities"
				/>
				<meta name="author" content="Hovah Yii" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
				<script src="https://kit.fontawesome.com/a076d05399.js"></script>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<Navbar />
			<Categories />
			<Slides />
			<Products />
			<Delivery />
			<Beauty />
			<FreeMeals />
			<Fresh />
			<Hotels />
			<Ikhlas />
			<Travel />
			<Footer />
		</div>
	)
}
