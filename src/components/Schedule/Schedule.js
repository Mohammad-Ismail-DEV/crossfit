import React from "react"
import "./Schedule.css"

const Schedule = ({ loading, schedule }) => {
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
			{!loading ? (
				<div className="grid">
					<div className="column">
						<div
							className={
								schedule.Monday?.first ? `session` : `clear`
							}>
							<div>{schedule.Monday?.first?.gym_class.name}</div>
							<div>{schedule.Monday?.first?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Monday?.second ? `session` : `clear`
							}>
							<div>{schedule.Monday?.second?.gym_class.name}</div>
							<div>
								{schedule.Monday?.second?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Monday?.third ? `session` : `clear`
							}>
							<div>{schedule.Monday?.third?.gym_class.name}</div>
							<div>{schedule.Monday?.third?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Monday?.fourth ? `session` : `clear`
							}>
							<div>{schedule.Monday?.fourth?.gym_class.name}</div>
							<div>
								{schedule.Monday?.fourth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Monday?.fifth ? `session` : `clear`
							}>
							<div>{schedule.Monday?.fifth?.gym_class.name}</div>
							<div>{schedule.Monday?.fifth?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Monday?.sixth ? `session` : `clear`
							}>
							<div>{schedule.Monday?.sixth?.gym_class.name}</div>
							<div>{schedule.Monday?.sixth?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Monday?.seventh ? `session` : `clear`
							}>
							<div>
								{schedule.Monday?.seventh?.gym_class.name}
							</div>
							<div>
								{schedule.Monday?.seventh?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Monday?.eighth ? `session` : `clear`
							}>
							<div>{schedule.Monday?.eighth?.gym_class.name}</div>
							<div>
								{schedule.Monday?.eighth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Monday?.ninth ? `session` : `clear`
							}>
							<div>{schedule.Monday?.ninth?.gym_class.name}</div>
							<div>{schedule.Monday?.ninth?.instructor.name}</div>
						</div>
					</div>
					<div className="column">
						<div
							className={
								schedule.Tuesday?.first ? `session` : `clear`
							}>
							<div>{schedule.Tuesday?.first?.gym_class.name}</div>
							<div>
								{schedule.Tuesday?.first?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.second ? `session` : `clear`
							}>
							<div>
								{schedule.Tuesday?.second?.gym_class.name}
							</div>
							<div>
								{schedule.Tuesday?.second?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.third ? `session` : `clear`
							}>
							<div>{schedule.Tuesday?.third?.gym_class.name}</div>
							<div>
								{schedule.Tuesday?.third?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.fourth ? `session` : `clear`
							}>
							<div>
								{schedule.Tuesday?.fourth?.gym_class.name}
							</div>
							<div>
								{schedule.Tuesday?.fourth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.fifth ? `session` : `clear`
							}>
							<div>{schedule.Tuesday?.fifth?.gym_class.name}</div>
							<div>
								{schedule.Tuesday?.fifth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.sixth ? `session` : `clear`
							}>
							<div>{schedule.Tuesday?.sixth?.gym_class.name}</div>
							<div>
								{schedule.Tuesday?.sixth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.seventh ? `session` : `clear`
							}>
							<div>
								{schedule.Tuesday?.seventh?.gym_class.name}
							</div>
							<div>
								{schedule.Tuesday?.seventh?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.eighth ? `session` : `clear`
							}>
							<div>
								{schedule.Tuesday?.eighth?.gym_class.name}
							</div>
							<div>
								{schedule.Tuesday?.eighth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.ninth ? `session` : `clear`
							}>
							<div>{schedule.Tuesday?.ninth?.gym_class.name}</div>
							<div>
								{schedule.Tuesday?.ninth?.instructor.name}
							</div>
						</div>
					</div>
					<div className="column">
						<div
							className={
								schedule.Wednesday?.first ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.first?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.first?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.second ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.second?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.second?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.third ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.third?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.third?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.fourth ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.fourth?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.fourth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.fifth ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.fifth?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.fifth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.sixth ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.sixth?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.sixth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.seventh
									? `session`
									: `clear`
							}>
							<div>
								{schedule.Wednesday?.seventh?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.seventh?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.eighth ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.eighth?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.eighth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.ninth ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.ninth?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.ninth?.instructor.name}
							</div>
						</div>
					</div>
					<div className="column">
						<div
							className={
								schedule.Thursday?.first ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.first?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.first?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.second ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.second?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.second?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.third ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.third?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.third?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.fourth ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.fourth?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.fourth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.fifth ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.fifth?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.fifth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.sixth ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.sixth?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.sixth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.seventh ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.seventh?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.seventh?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.eighth ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.eighth?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.eighth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.ninth ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.ninth?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.ninth?.instructor.name}
							</div>
						</div>
					</div>
					<div className="column">
						<div
							className={
								schedule.Friday?.first ? `session` : `clear`
							}>
							<div>{schedule.Friday?.first?.gym_class.name}</div>
							<div>{schedule.Friday?.first?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Friday?.second ? `session` : `clear`
							}>
							<div>{schedule.Friday?.second?.gym_class.name}</div>
							<div>
								{schedule.Friday?.second?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Friday?.third ? `session` : `clear`
							}>
							<div>{schedule.Friday?.third?.gym_class.name}</div>
							<div>{schedule.Friday?.third?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Friday?.fourth ? `session` : `clear`
							}>
							<div>{schedule.Friday?.fourth?.gym_class.name}</div>
							<div>
								{schedule.Friday?.fourth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Friday?.fifth ? `session` : `clear`
							}>
							<div>{schedule.Friday?.fifth?.gym_class.name}</div>
							<div>{schedule.Friday?.fifth?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Friday?.sixth ? `session` : `clear`
							}>
							<div>{schedule.Friday?.sixth?.gym_class.name}</div>
							<div>{schedule.Friday?.sixth?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Friday?.seventh ? `session` : `clear`
							}>
							<div>
								{schedule.Friday?.seventh?.gym_class.name}
							</div>
							<div>
								{schedule.Friday?.seventh?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Friday?.eighth ? `session` : `clear`
							}>
							<div>{schedule.Friday?.eighth?.gym_class.name}</div>
							<div>
								{schedule.Friday?.eighth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Friday?.ninth ? `session` : `clear`
							}>
							<div>{schedule.Friday?.ninth?.gym_class.name}</div>
							<div>{schedule.Friday?.ninth?.instructor.name}</div>
						</div>
					</div>
					<div className="column">
						<div
							className={
								schedule.Saturday?.first ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.first?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.first?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.second ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.second?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.second?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.third ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.third?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.third?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.fourth ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.fourth?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.fourth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.fifth ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.fifth?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.fifth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.sixth ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.sixth?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.sixth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.seventh ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.seventh?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.seventh?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.eighth ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.eighth?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.eighth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.ninth ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.ninth?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.ninth?.instructor.name}
							</div>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	)
}

export default Schedule
