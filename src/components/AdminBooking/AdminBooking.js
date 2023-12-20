import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
	getBookings,
	getMembers,
	getPersonalTrainers,
	postBoooking
} from "../../axios/axios"

import "./AdminBooking.css"

const AdminBooking = ({ show = false, handlePopUp }) => {
	const params = useParams()
	const id = params.id
	const [memberId, setMemberId] = useState("")
	const [personalTrainerId, setPersonalTrainerId] = useState("")
	const [members, setMembers] = useState([])
	const [personalTrainers, setPersonalTrainers] = useState([])

	const getMembersAndPersonalTrainers = async () => {
		const m = await getMembers()
		const p = await getPersonalTrainers()
		setMembers(m)
		setPersonalTrainers(p)
	}

	const getBooking = async () => {
		const r = await getBookings(id)
		setMemberId(r.member.id)
		setPersonalTrainerId(r.personal_trainer.id)
	}

	const addPersonalTrainer = async () => {
		if (!isNaN(id)) {
			await postBoooking({
				id,
				member_id: memberId,
				personal_trainer_id: personalTrainerId
			})
		} else {
			await postBoooking({
				member_id: memberId,
				personal_trainer_id: personalTrainerId
			})
		}
		handlePopUp()
	}

	useEffect(() => {
		getMembersAndPersonalTrainers()
		if (!isNaN(id)) {
			getBooking()
		}
		// eslint-disable-next-line
	}, [])
	return (
		<div>
			{show ? (
				<div
					className="AdminBooking"
					onClick={(event) => {
						if (event.target !== event.currentTarget) return
						handlePopUp()
					}}>
					<div className="form">
						<div className="input-holder">
							<div className="placeholder">Member</div>
							<select
								onChange={(e) => setMemberId(e.target.value)}
								className="input"
								value={memberId}
								type="text">
								<option value={null}>Select Member...</option>
								{members.map((v) => (
									<option value={v.id}>{v.name}</option>
								))}
							</select>
						</div>
						<div className="input-holder">
							<div className="placeholder">Personal Trainer</div>
							<select
								onChange={(e) =>
									setPersonalTrainerId(e.target.value)
								}
								className="input"
								value={personalTrainerId}
								type="text">
								<option value={null}>
									Select Personal Trainer...
								</option>
								{personalTrainers.map((v) => (
									<option value={v.id}>{v.name}</option>
								))}
							</select>
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

export default AdminBooking
