import React, { useEffect, useState } from "react"
import "./AdminProduct.css"
import { useParams } from "react-router-dom"
import { getProducts, postProduct } from "../../axios/axios"
import UppyUpload from "../UppyUpload/UppyUpload"

const AdminProduct = ({ show = false, handlePopUp }) => {
	const params = useParams()
	const id = params.id
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [image, setImage] = useState()
	const [price, setPrice] = useState()

	const getProduct = async () => {
		const r = await getProducts(id)
		setName(r.name)
		setDescription(r.description)
		setImage(r.image)
		setPrice(r.price)
	}

	const [submit, setSubmit] = useState(false)

	const addProduct = async () => {
		if (!isNaN(id)) {
			setSubmit(true)
			await postProduct({ id, name, description, image, price })
		} else {
			await postProduct({ name, description, image, price })
		}
		handlePopUp()
		setSubmit(false)
		setName()
		setDescription()
		setImage()
		setPrice()
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
						<div className="splitter">
							<div className="left">
								<div className="input-holder">
									<div className="placeholder">Name</div>
									<input
										onChange={(e) =>
											setName(e.target.value)
										}
										className="input"
										type="text"
										value={name}
										placeholder="Product Name"
									/>
								</div>
								<div className="input-holder">
									<div className="placeholder">
										Description
									</div>
									<input
										onChange={(e) =>
											setDescription(e.target.value)
										}
										className="input"
										type="text"
										value={description}
										placeholder="Product Description"
									/>
								</div>
								<div className="input-holder">
									<div className="placeholder">Price</div>
									<input
										onChange={(e) =>
											setPrice(e.target.value)
										}
										className="input"
										type="text"
										value={price}
										placeholder="Product Price"
									/>
								</div>
							</div>
							<div className="right">
								<div className="uppy-holder">
									<UppyUpload
										onComplete={(e) => {
											setImage(e[0].data)
											console.log("e", e[0].data)
										}}
										onSubmit={submit}
										name="image"
										defaultImages={image && [image]}
										singleFile
									/>
								</div>
							</div>
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
