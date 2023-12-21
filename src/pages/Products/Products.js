import React, { useEffect, useState } from "react"
import "./Products.css"
import productImg from "../../assets/images/product-bg.jpg"
import userImg from "../../assets/images/user.jpg"
import Footer from "../../Components/Footer/Footer"
import ProductCard from "../../Components/ProductCard/ProductCard"
import { getProducts } from "../../axios/axios"

const Products = () => {
	const [products, setProducts] = useState([])

	const handleData = async () => {
		const r = await getProducts()
		setProducts(r)
	}

	useEffect(() => {
		handleData()
	}, [])

	return (
		<div>
			<div className="headImg">
				<img src={productImg} alt="product" className="intro-image" />
			</div>
			<div className="products-display">
				{products.map((data) => (
					<ProductCard
						data={{
							...data,
							image: "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?cs=srgb&dl=pexels-alex-andrews-821651.jpg&fm=jpg"
						}}
					/>
				))}
			</div>
			<Footer />
		</div>
	)
}

export default Products
