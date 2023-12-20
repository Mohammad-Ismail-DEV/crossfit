import React, { useEffect, useState } from "react"
import "./AdminPersonalTrainer.css"
import { useParams } from "react-router-dom"
import { getPersonalTrainers, postPersonalTrainer } from "../../axios/axios"

const AdminPersonalTrainer = ({ show = false, handlePopUp }) => {
	const params = useParams()
	const id = params.id
	const [name, setName] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("")

	const getPersonalTrainer = async () => {
		const r = await getPersonalTrainers(id)
		setName(r.name)
		setPhoneNumber(r.phone_number)
	}

	const addPersonalTrainer = async () => {
		if (!isNaN(id)) {
			await postPersonalTrainer({ id, phone_number: phoneNumber, name })
		} else {
			await postPersonalTrainer({ name, phone_number: phoneNumber })
		}
		handlePopUp()
	}

	useEffect(() => {
		if (!isNaN(id)) {
			getPersonalTrainer()
		}
		// eslint-disable-next-line
	}, [])

	return (
		<div>
			{show ? (
				<div
					className="AdminPersonalTrainer"
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
								placeholder="Trainer's Name"
							/>
						</div>
						<div className="input-holder">
							<div className="placeholder">PhoneNumber</div>
							<input
								onChange={(e) => setPhoneNumber(e.target.value)}
								className="input"
								type="text"
								placeholder="Trainer's Phone Number"
							/>
						</div>
						<div
							onClick={() => addPersonalTrainer()}
							className="submit">
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

export default AdminPersonalTrainer
