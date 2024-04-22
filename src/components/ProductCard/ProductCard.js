import React from "react"
import "./ProductCard.css"
import Image from "../Image/Image"

const ProductCard = ({ data }) => {
	return (
		<div className="ProductCard">
			<div className="image-holder">
				<Image
					fromServer
					src={data?.image}
					alt="Product"
					className="product-image"
				/>
			</div>
			<div className="product-name">Name: {data.name}</div>
			<div className="product-price">Price: ${data.price}</div>
			<div className="product-description">{data.description}</div>
		</div>
	)
}

export default ProductCard
