import React, { useEffect, useState } from "react"
import "./AdminProduct.css"
import { useParams } from "react-router-dom"
import { getProducts, postProduct } from "../../axios/axios"

const AdminProduct = ({ show = false, handlePopUp }) => {
	const params = useParams()
	const id = params.id
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	// const [photo, setPhoto] = useState()
	const [price, setPrice] = useState()

	const getProduct = async () => {
		const r = await getProducts(id)
		setName(r.name)
		setDescription(r.description)
		// setPhoto(r.photo)
		setPrice(r.price)
	}

	const addProduct = async () => {
		if (!isNaN(id)) {
			await postProduct({ id, name, description, photo: "photo", price })
		} else {
			await postProduct({ name, description, photo: "photo", price })
		}
		handlePopUp()
	}

	useEffect(() => {
		if (!isNaN(id)) {
			getProduct()
		}
		// eslint-disable-next-line
	}, [])

	return (
		<div>
			{show ? (
				<div
					className="AdminProduct"
					onClick={(event) => {
						if (event.target !== event.currentTarget) return
						handlePopUp()
					}}>
					<div className="form">
						<div className="input-holder">
							<div className="placeholder">Name</div>
							<input
								onChange={(e) => setName(e.target.value)}
								className="input"
								type="text"
								value={name}
								placeholder="Product Name"
							/>
						</div>
						<div className="input-holder">
							<div className="placeholder">Description</div>
							<input
								onChange={(e) => setDescription(e.target.value)}
								className="input"
								type="text"
								value={description}
								placeholder="Product Description"
							/>
						</div>
						{/* <div className="input-holder">
							<div className="placeholder">Photo</div>
							<input
								// onChange={(e) => setName(e.target.value)}
								onChange={(e) => console.log("e", e)}
								className="file-input"
								type="file"
							/>
						</div> */}
						<div className="input-holder">
							<div className="placeholder">Price</div>
							<input
								onChange={(e) => setPrice(e.target.value)}
								className="input"
								type="text"
								value={price}
								placeholder="Product Price"
							/>
						</div>
						<div onClick={() => addProduct()} className="submit">
							Submit
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	)
}

export default AdminProduct
