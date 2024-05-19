import React, { useEffect, useState } from "react"
import "./Classes.css"
import classbg from "../../assets/images/classes-bg.jpg"
import crossfit from "../../assets/images/crossfit.png"
import fitness from "../../assets/images/fitness.png"
import climbing from "../../assets/images/climbing.png"
import stretching from "../../assets/images/stretching.png"
import yoga from "../../assets/images/yoga.png"
import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import {
	getPersonalTrainers,
	getSChedule,
	getSessions,
	postBoooking,
	postMemberClass
} from "../../axios/axios"
import Schedule from "../../components/Schedule/Schedule"
import { useAtomValue } from "jotai"
import { userAtom } from "../../store/atoms"

const Classes = () => {
	const [schedule, setSchedule] = useState({})
	const [session, setSession] = useState({})
	const [sessions, setSessions] = useState([])
	const user = useAtomValue(userAtom)
	const [loadingSchedule, setLoadingSchedule] = useState(true)
	const [day, setDay] = useState(null)
	const [personalTrainerId, setPersonalTrainerId] = useState(null)
	const [personalTrainers, setPersonalTrainers] = useState([])

	const getPts = async () => {
		const p = await getPersonalTrainers()
		setPersonalTrainers(p)
	}

	const addBooking = async () => {
		await postBoooking({
			member_id: user.id,
			personal_trainer_id: personalTrainerId
		})
		reset()
	}

	const handleSchedule = async () => {
		setLoadingSchedule(true)
		const r = await getSChedule()
		setSchedule(r)
		setLoadingSchedule(false)
	}

	const days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	]

	const handleGetSessions = async () => {
		const r = await getSessions()
		setSessions(r)
	}

	const reset = () => {
		setSession({})
		setDay(null)
		setPersonalTrainerId(null)
	}

	const navigate = useNavigate()
	useEffect(() => {
		handleSchedule()
	}, [])

	const handlePostSession = async () => {
		await postMemberClass({
			member_id: user.id,
			session_id: session
		})
		reset()
	}

	useEffect(() => {
		handleGetSessions()
		getPts()
	}, [user])

	return (
		<div className="Classes">
			<div className="classes-bg">
				<img className="image" src={classbg} alt="classes" />
			</div>
			<div className="gym">
				<div className="icons">
					<div
						onClick={() => navigate("/classes")}
						className="icon-holder">
						<img
							className="icon-image"
							src={crossfit}
							alt="crossfit"
						/>
						<div className="icon-title">Crossfit</div>
					</div>
					<div
						onClick={() => navigate("/classes")}
						className="icon-holder">
						<img
							className="icon-image"
							src={fitness}
							alt="fitness"
						/>
						<div className="icon-title">Fitness</div>
					</div>
					<div
						onClick={() => navigate("/classes")}
						className="icon-holder">
						<img
							className="icon-image"
							src={climbing}
							alt="climbing"
						/>
						<div className="icon-title">Climbing</div>
					</div>
					<div
						onClick={() => navigate("/classes")}
						className="icon-holder">
						<img
							className="icon-image"
							src={stretching}
							alt="stretching"
						/>
						<div className="icon-title">Cardio</div>
					</div>
					<div
						onClick={() => navigate("/classes")}
						className="icon-holder">
						<img
							className="icon-image"
							src={yoga}
							alt="stretching"
						/>
						<div className="icon-title">Yoga</div>
					</div>
				</div>
			</div>

			{!isNaN(user.id) ? (
				<div className="member_classes">
					<div className="join-sessions">
						<div className="join-session-title">
							Join a Session Now!
						</div>
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
							<div className="placeholder">Session</div>
							<select
								onChange={(e) => {
									setSession(e.target.value)
								}}
								className="input"
								placeholder="Day">
								<option value={null}>Select Session...</option>
								{sessions[day] &&
									sessions[day].map((v) => (
										<option value={v.id}>
											{v.gym_class.name} by Coach{" "}
											{v.instructor.name} for period{" "}
											{v.period}
										</option>
									))}
							</select>
						</div>
						<div
							className="submit-button"
							onClick={() => handlePostSession()}>
							Join Session
						</div>
					</div>
					<div className="join-sessions">
						<div className="join-session-title">
							Book an Instructor Now!
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
							className="submit-button"
							onClick={() => addBooking()}>
							Book Instructor
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
			<div className="image">
				<Schedule loading={loadingSchedule} schedule={schedule} />
			</div>
			<Footer />
		</div>
	)
}

export default Classes
