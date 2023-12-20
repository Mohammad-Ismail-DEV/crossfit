import React, { useEffect, useState } from "react"
import "./AdminClass.css"
import { getClasses, postClass } from "../../axios/axios"
import { useParams } from "react-router-dom/dist"

const AdminClass = ({ show = false, handlePopUp }) => {
	const params = useParams()
	const id = params.id
	const [name, setName] = useState("")

	const getClass = async () => {
		const r = await getClasses(id)
		setName(r.name)
	}

	const addClass = async () => {
		if (!isNaN(id)) {
			await postClass({ id, name })
		} else {
			await postClass({ name })
		}
		handlePopUp()
	}

	useEffect(() => {
		if (!isNaN(id)) {
			getClass()
		}
		// eslint-disable-next-line
	}, [])

	return (
		<div>
			{show ? (
				<div
					className="AdminClass"
					onClick={(event) => {
						if (event.target !== event.currentTarget) return
						handlePopUp()
					}}>
					<div className="form">
						<div className="input-holder">
							<div className="placeholder">Class Name</div>
							<input
								onChange={(e) => setName(e.target.value)}
								className="input"
								type="text"
								placeholder="Class Name"
								value={name}
							/>
						</div>
						<div onClick={() => addClass()} className="submit">
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

export default AdminClass
