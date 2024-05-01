import React from "react"
import "./Schedule.css"

const Schedule = ({ loading, schedule }) => {
	return (
		<div className="Schedule">
			<div className="days">
				<div className="day">Class Time</div>
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
						<div className="time">7:00 - 8:15</div>
						<div className="time">9:00 - 9:15</div>
						<div className="time">11:00 - 11:45</div>
						<div className="time">1:00 - 2:15</div>
						<div className="time">3:00 - 1:15</div>
						<div className="time">5:00 - 1:15</div>
						<div className="time">7:00 - 1:15</div>
						<div className="time">9:00 - 1:15</div>
						<div className="time">11:00 - 12:00</div>
					</div>	
					<div className="column">
						
						<div
							className={
								schedule.Monday?.First ? `session` : `clear`
							}>
							<div>{schedule.Monday?.First?.gym_class.name}</div>
							<div>{schedule.Monday?.First?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Monday?.Second ? `session` : `clear`
							}>
							<div>{schedule.Monday?.Second?.gym_class.name}</div>
							<div>
								{schedule.Monday?.Second?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Monday?.Third ? `session` : `clear`
							}>
							<div>{schedule.Monday?.Third?.gym_class.name}</div>
							<div>{schedule.Monday?.Third?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Monday?.Fourth ? `session` : `clear`
							}>
							<div>{schedule.Monday?.Fourth?.gym_class.name}</div>
							<div>
								{schedule.Monday?.Fourth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Monday?.Fifth ? `session` : `clear`
							}>
							<div>{schedule.Monday?.Fifth?.gym_class.name}</div>
							<div>{schedule.Monday?.Fifth?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Monday?.Sixth ? `session` : `clear`
							}>
							<div>{schedule.Monday?.Sixth?.gym_class.name}</div>
							<div>{schedule.Monday?.Sixth?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Monday?.Seventh ? `session` : `clear`
							}>
							<div>
								{schedule.Monday?.Seventh?.gym_class.name}
							</div>
							<div>
								{schedule.Monday?.Seventh?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Monday?.Eighth ? `session` : `clear`
							}>
							<div>{schedule.Monday?.Eighth?.gym_class.name}</div>
							<div>
								{schedule.Monday?.Eighth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Monday?.Ninth ? `session` : `clear`
							}>
							<div>{schedule.Monday?.Ninth?.gym_class.name}</div>
							<div>{schedule.Monday?.Ninth?.instructor.name}</div>
						</div>
					</div>
					<div className="column">
						<div
							className={
								schedule.Tuesday?.First ? `session` : `clear`
							}>
							<div>{schedule.Tuesday?.First?.gym_class.name}</div>
							<div>
								{schedule.Tuesday?.First?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.Second ? `session` : `clear`
							}>
							<div>
								{schedule.Tuesday?.Second?.gym_class.name}
							</div>
							<div>
								{schedule.Tuesday?.Second?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.Third ? `session` : `clear`
							}>
							<div>{schedule.Tuesday?.Third?.gym_class.name}</div>
							<div>
								{schedule.Tuesday?.Third?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.Fourth ? `session` : `clear`
							}>
							<div>
								{schedule.Tuesday?.Fourth?.gym_class.name}
							</div>
							<div>
								{schedule.Tuesday?.Fourth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.Fifth ? `session` : `clear`
							}>
							<div>{schedule.Tuesday?.Fifth?.gym_class.name}</div>
							<div>
								{schedule.Tuesday?.Fifth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.Sixth ? `session` : `clear`
							}>
							<div>{schedule.Tuesday?.Sixth?.gym_class.name}</div>
							<div>
								{schedule.Tuesday?.Sixth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.Seventh ? `session` : `clear`
							}>
							<div>
								{schedule.Tuesday?.Seventh?.gym_class.name}
							</div>
							<div>
								{schedule.Tuesday?.Seventh?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.Eighth ? `session` : `clear`
							}>
							<div>
								{schedule.Tuesday?.Eighth?.gym_class.name}
							</div>
							<div>
								{schedule.Tuesday?.Eighth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Tuesday?.Ninth ? `session` : `clear`
							}>
							<div>{schedule.Tuesday?.Ninth?.gym_class.name}</div>
							<div>
								{schedule.Tuesday?.Ninth?.instructor.name}
							</div>
						</div>
					</div>
					<div className="column">
						<div
							className={
								schedule.Wednesday?.First ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.First?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.First?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.Second ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.Second?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.Second?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.Third ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.Third?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.Third?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.Fourth ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.Fourth?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.Fourth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.Fifth ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.Fifth?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.Fifth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.Sixth ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.Sixth?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.Sixth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.Seventh
									? `session`
									: `clear`
							}>
							<div>
								{schedule.Wednesday?.Seventh?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.Seventh?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.Eighth ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.Eighth?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.Eighth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Wednesday?.Ninth ? `session` : `clear`
							}>
							<div>
								{schedule.Wednesday?.Ninth?.gym_class.name}
							</div>
							<div>
								{schedule.Wednesday?.Ninth?.instructor.name}
							</div>
						</div>
					</div>
					<div className="column">
						<div
							className={
								schedule.Thursday?.First ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.First?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.First?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.Second ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.Second?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.Second?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.Third ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.Third?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.Third?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.Fourth ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.Fourth?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.Fourth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.Fifth ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.Fifth?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.Fifth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.Sixth ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.Sixth?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.Sixth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.Seventh ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.Seventh?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.Seventh?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.Eighth ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.Eighth?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.Eighth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Thursday?.Ninth ? `session` : `clear`
							}>
							<div>
								{schedule.Thursday?.Ninth?.gym_class.name}
							</div>
							<div>
								{schedule.Thursday?.Ninth?.instructor.name}
							</div>
						</div>
					</div>
					<div className="column">
						<div
							className={
								schedule.Friday?.First ? `session` : `clear`
							}>
							<div>{schedule.Friday?.First?.gym_class.name}</div>
							<div>{schedule.Friday?.First?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Friday?.Second ? `session` : `clear`
							}>
							<div>{schedule.Friday?.Second?.gym_class.name}</div>
							<div>
								{schedule.Friday?.Second?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Friday?.Third ? `session` : `clear`
							}>
							<div>{schedule.Friday?.Third?.gym_class.name}</div>
							<div>{schedule.Friday?.Third?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Friday?.Fourth ? `session` : `clear`
							}>
							<div>{schedule.Friday?.Fourth?.gym_class.name}</div>
							<div>
								{schedule.Friday?.Fourth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Friday?.Fifth ? `session` : `clear`
							}>
							<div>{schedule.Friday?.Fifth?.gym_class.name}</div>
							<div>{schedule.Friday?.Fifth?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Friday?.Sixth ? `session` : `clear`
							}>
							<div>{schedule.Friday?.Sixth?.gym_class.name}</div>
							<div>{schedule.Friday?.Sixth?.instructor.name}</div>
						</div>
						<div
							className={
								schedule.Friday?.Seventh ? `session` : `clear`
							}>
							<div>
								{schedule.Friday?.Seventh?.gym_class.name}
							</div>
							<div>
								{schedule.Friday?.Seventh?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Friday?.Eighth ? `session` : `clear`
							}>
							<div>{schedule.Friday?.Eighth?.gym_class.name}</div>
							<div>
								{schedule.Friday?.Eighth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Friday?.Ninth ? `session` : `clear`
							}>
							<div>{schedule.Friday?.Ninth?.gym_class.name}</div>
							<div>{schedule.Friday?.Ninth?.instructor.name}</div>
						</div>
					</div>
					<div className="column">
						<div
							className={
								schedule.Saturday?.First ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.First?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.First?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.Second ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.Second?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.Second?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.Third ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.Third?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.Third?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.Fourth ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.Fourth?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.Fourth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.Fifth ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.Fifth?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.Fifth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.Sixth ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.Sixth?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.Sixth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.Seventh ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.Seventh?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.Seventh?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.Eighth ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.Eighth?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.Eighth?.instructor.name}
							</div>
						</div>
						<div
							className={
								schedule.Saturday?.Ninth ? `session` : `clear`
							}>
							<div>
								{schedule.Saturday?.Ninth?.gym_class.name}
							</div>
							<div>
								{schedule.Saturday?.Ninth?.instructor.name}
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
