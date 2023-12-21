import React, { useEffect, useState } from "react"
import "./AdminMember.css"
import { useParams } from "react-router-dom"
import { getMembers, postMember } from "../../axios/axios"

const AdminMember = ({ show = false, handlePopUp }) => {
	const params = useParams()
	const id = params.id
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phoneNumber, setPhoneNumber] = useState()

	const getMember = async () => {
		const r = await getMembers({ id })
		setName(r.name)
		setEmail(r.email)
		setPhoneNumber(r.phone_number)
	}

	const addMember = async () => {
		if (!isNaN(id)) {
			await postMember({ id, name })
		} else {
			await postMember({ name, email, phone_number: phoneNumber })
		}
		handlePopUp()
	}

	useEffect(() => {
		if (!isNaN(id)) {
			getMember()
		}
		// eslint-disable-next-line
	}, [])

	return (
		<div>
			{show ? (
				<div
					className="AdminMember"
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
								placeholder="Member Name"
								value={name}
							/>
						</div>
						<div className="input-holder">
							<div className="placeholder">Email</div>
							<input
								onChange={(e) => setEmail(e.target.value)}
								className="input"
								type="text"
								placeholder="Member Email"
								value={email}
							/>
						</div>
						<div className="input-holder">
							<div className="placeholder">Phone Number</div>
							<input
								onChange={(e) => setPhoneNumber(e.target.value)}
								className="input"
								type="text"
								placeholder="Member Phone Number"
								value={phoneNumber}
							/>
						</div>
						<div onClick={() => addMember()} className="submit">
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

export default AdminMember
