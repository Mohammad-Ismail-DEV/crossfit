import React from "react"
import "./Products.css"
import productImg from "../../assets/images/product-bg.jpg"
import userImg from "../../assets/images/user.jpg"
import Footer from "../../Components/Footer/Footer"

const Products = () => {
	return (
		<div>
			<div className="headImg">
				<img src={productImg} alt="product" className="intro-image" />
			</div>
			<div className="Product-card">
				<img src={userImg} alt="Product" style={{ width: "100%" }} />
				<h1>Product Name</h1>
				<p className="price">Price</p>
				<p>Description of the product</p>
			</div>
			<Footer />
		</div>
	)
}

export default Products
