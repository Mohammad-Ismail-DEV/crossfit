import React from "react"
import "./ProductCard.css"

const ProductCard = ({ data }) => {
	return (
		<div className="ProductCard">
			<img src={data.image} alt="Product" className="product-image" />
			<div className="product-name">Name: {data.name}</div>
			<div className="product-price">Price: ${data.price}</div>
			<div className="product-description">{data.description}</div>
		</div>
	)
}

export default ProductCard
