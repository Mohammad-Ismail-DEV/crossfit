import React from "react"
import "./Schedule.css"

const Schedule = ({ schedule }) => {
	const periodloop = [...Array(9)]
	return (
		<div className="Schedule">
			<div className="days">
				<div className="day">Monday</div>
				<div className="day">Tuesday</div>
				<div className="day">Wednesday</div>
				<div className="day">Thursday</div>
				<div className="day">Friday</div>
				<div className="day">Saturday</div>
			</div>
			<div className="grid">
				{Object.values(schedule)
					.map((v) =>
						periodloop.map((_, k1) =>
							v.find((v2) => v2.period === k1 + 1)
						)
					)
					.map((day) => (
						<div className="column">
							{day.map((session) =>
								session ? (
									<div className="session">
										<div>
											Coach {session.instructor.name}
										</div>
										<div>{session.gym_class.name}</div>
									</div>
								) : (
									<div className="clear"></div>
								)
							)}
						</div>
					))}
			</div>
		</div>
	)
}

export default Schedule
