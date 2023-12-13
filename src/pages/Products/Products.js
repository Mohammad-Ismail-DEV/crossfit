import React from "react"
import './Products.css'
import productImg from '../../assets/images/product-bg.jpg'
import userImg from '../../assets/images/user.jpg'

const Products = () => {
	return (
	<div>
		<div className="headImg">
			<img src={ productImg }/>
		</div>
		<div>
		<div className="card">
        <img src={userImg} alt="Product Image" style={{ width: '100%' }} />
        <h1>Product Name</h1>
        <p className="price">Price</p>
				 <p>Description of the product</p>
      </div>
		</div>
</div>
	);
}

export default Products
