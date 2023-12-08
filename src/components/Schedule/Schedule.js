import React from "react"
import "./Schedule.css"

const Schedule = ({ schedule = [] }) => {
	const def = [
		[{}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}]
	]
	return (
		<div>
			<div className="days">
				<div className="day">Monday</div>
				<div className="day">Tuesday</div>
				<div className="day">Wednesday</div>
				<div className="day">Thursday</div>
				<div className="day">Friday</div>
				<div className="day">Saturday</div>
			</div>
			<div className="grid">
				{schedule.length !== 0 &&
					schedule.map((day) => (
						<div className="column">
							{day.map((session, k) => (
								<div
									className={`${
										session.class ? "session" : "clear"
									}`}>
									<div>{session.instructor}</div>
									<div>{session.class}</div>
									<div>{session.time}</div>
								</div>
							))}
						</div>
					))}
				{schedule.length === 0 &&
					def.map((day) => (
						<div className="column">
							{day.map((session, k) => (
								<div
									className={`${
										session.class ? "session" : "clear"
									}`}>
									<div>{session.instructor}</div>
									<div>{session.class}</div>
									<div>{session.time}</div>
								</div>
							))}
						</div>
					))}
			</div>
		</div>
	)
}

export default Schedule
