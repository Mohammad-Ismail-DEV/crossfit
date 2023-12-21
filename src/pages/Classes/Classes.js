import React, { useEffect, useState } from "react"
import "./Classes.css"
import classbg from "../../assets/images/classes-bg.jpg"
import crossfit from "../../assets/images/crossfit.png"
import fitness from "../../assets/images/fitness.png"
import climbing from "../../assets/images/climbing.png"
import stretching from "../../assets/images/stretching.png"
import yoga from "../../assets/images/yoga.png"
import { useNavigate } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import { getSessions } from "../../axios/axios"
import Schedule from "../../Components/Schedule/Schedule"

const Classes = () => {
	const [schedule, setSchedule] = useState({})
	const handleSchedule = async () => {
		const r = await getSessions()
		setSchedule(r)
	}
	const navigate = useNavigate()
	useEffect(() => {
		handleSchedule()
	}, [])

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
			<div className="image">
				<Schedule schedule={schedule} />
			</div>
			<Footer />
		</div>
	)
}

export default Classes
