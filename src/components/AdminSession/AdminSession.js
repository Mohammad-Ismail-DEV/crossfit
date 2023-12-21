import React, { useEffect, useState } from "react"
import "./AdminSession.css"
import { useParams } from "react-router-dom"
import {
	getClasses,
	getInstructors,
	getSessions,
	postSession
} from "../../axios/axios"
import "./AdminSession.css"

const AdminSession = ({ show = false, handlePopUp }) => {
	const params = useParams()
	const id = params.id
	const [day, setDay] = useState("")
	const [period, setPeriod] = useState("")
	const [gymClassID, setGymClassID] = useState("")
	const [instructorId, setInstructorID] = useState("")
	const [gymClasses, setGymClasses] = useState([])
	const [instructors, setInstructors] = useState([])

	const days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	]

	const getClasseAndInstructors = async () => {
		const c = await getClasses()
		const i = await getInstructors()
		setGymClasses(c)
		setInstructors(i)
	}

	const periods = [
		"First",
		"Second",
		"Third",
		"Fourth",
		"Fifth",
		"Sixth",
		"Seventh",
		"Eighth",
		"Ninth"
	]

	const getSession = async () => {
		const r = await getSessions(id)
		setDay(r.day)
		setPeriod(r.period)
		setGymClassID(r.gym_class.id)
		setInstructorID(r.instructor.id)
	}

	const addSession = async () => {
		if (!isNaN(id)) {
			await postSession({
				id,
				day,
				period,
				gym_class_id: gymClassID,
				instructor_id: instructorId
			})
		} else {
			await postSession({
				day,
				period,
				gym_class_id: gymClassID,
				instructor_id: instructorId
			})
		}
		handlePopUp()
	}

	useEffect(() => {
		getClasseAndInstructors()
		if (!isNaN(id)) {
			getSession()
		}
		// eslint-disable-next-line
	}, [])

	return (
		<div>
			{show ? (
				<div
					className="AdminSession"
					onClick={(event) => {
						if (event.target !== event.currentTarget) return
						handlePopUp()
					}}>
					<div className="form">
						<div className="input-holder">
							<div className="placeholder">Day</div>
							<select
								onChange={(e) => {
									setDay(e.target.value)
								}}
								value={day}
								className="input"
								placeholder="Day">
								<option value={null}>Select Day...</option>
								{days.map((v) => (
									<option value={v}>{v}</option>
								))}
							</select>
						</div>
						<div className="input-holder">
							<div className="placeholder">Period</div>
							<select
								onChange={(e) => setPeriod(e.target.value)}
								value={period}
								className="input"
								placeholder="Period">
								<option value={null}>Select Period...</option>
								{periods.map((v, k) => (
									<option value={k + 1}>{v}</option>
								))}
							</select>
						</div>
						<div className="input-holder">
							<div className="placeholder">Class</div>
							<select
								onChange={(e) => setGymClassID(e.target.value)}
								className="input"
								type="text"
								placeholder="Class"
								value={gymClassID}>
								<option value={null}>
									Select Gym Class...
								</option>
								{gymClasses.map((v) => (
									<option value={v.id}>{v.name}</option>
								))}
							</select>
						</div>
						<div className="input-holder">
							<div className="placeholder">Instructor</div>
							<select
								onChange={(e) =>
									setInstructorID(e.target.value)
								}
								value={instructorId}
								className="input"
								type="text"
								placeholder="Instructor">
								<option value={null}>
									Select Instructor...
								</option>
								{instructors.map((v) => (
									<option value={v.id}>{v.name}</option>
								))}
							</select>
						</div>
						<div onClick={() => addSession()} className="submit">
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

export default AdminSession
