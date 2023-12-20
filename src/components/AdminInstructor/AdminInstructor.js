import React, { useEffect, useState } from "react"
import "./AdminInstructor.css"
import { useParams } from "react-router-dom"
import { getInstructors, postInstructor } from "../../axios/axios"

const AdminInstructor = ({ show = false, handlePopUp }) => {
	const params = useParams()
	const id = params.id
	const [name, setName] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("")

	const getInstructor = async () => {
		const r = await getInstructors(id)
		setName(r.name)
		setPhoneNumber(r.phone_number)
	}

	const addInstructor = async () => {
		if (!isNaN(id)) {
			await postInstructor({ id, phone_number: phoneNumber, name })
		} else {
			await postInstructor({ name, phone_number: phoneNumber })
		}
		handlePopUp()
	}

	useEffect(() => {
		if (!isNaN(id)) {
			getInstructor()
		}
		// eslint-disable-next-line
	}, [])

	return (
		<div>
			{show ? (
				<div
					className="AdminInstructor"
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
								placeholder="Instructor Name"
							/>
						</div>
						<div className="input-holder">
							<div className="placeholder">PhoneNumber</div>
							<input
								onChange={(e) => setPhoneNumber(e.target.value)}
								className="input"
								type="text"
								placeholder="Insructor's Phone Number"
							/>
						</div>
						<div onClick={() => addInstructor()} className="submit">
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

export default AdminInstructor
