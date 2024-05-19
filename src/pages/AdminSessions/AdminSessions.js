import React, { useEffect } from "react"
import AdminSession from "../../components/AdminSession/AdminSession"
import { useState } from "react"
import "./AdminSessions.css"
import { Outlet } from "react-router-dom"
import { getSessions } from "../../axios/axios"
import Actions from "../../components/Actions/Actions"
import Table from "../../components/Table/Table"
import add from "../../assets/images/add.png"
import refresh from "../../assets/images/refresh.png"
import Sidebar from "../../components/Sidebar/Sidebar"

const AdminSessions = () => {
	const [sessions, setSessions] = useState({})
	const [showPopUp, setShowPopUp] = useState(false)

	const handleProductPopUp = () => {
		setShowPopUp(!showPopUp)
		handleGetSessions()
	}

	const handleGetSessions = async () => {
		const r = await getSessions()
		setSessions(r)
	}

	useEffect(() => {
		handleGetSessions()
		// eslint-disable-next-line
	}, [window.location.pathname])

	return (
		<div className="AdminSessions">
			<Sidebar />
			<div className="page">
				<div className="handle-data">
					<div onClick={handleProductPopUp} className="add-item">
						<img src={add} alt="add" className="handle-data-icon" />
						Add Session
					</div>
					<div onClick={handleGetSessions} className="refresh-table">
						<img
							src={refresh}
							alt="refresh"
							className="handle-data-icon"
						/>
						Refresh Data
					</div>
				</div>
				{Object.keys(sessions).length !== 0 ? (
					Object.keys(sessions).map((day) => (
						<div>
							<div className="session-day">{day}</div>
							<Table
								rowData={sessions[day]}
								colDefs={[
									{
										field: "actions",
										cellRenderer: ({ data }) => (
											<Actions
												handleData={handleGetSessions}
												address={"sessions"}
												id={data.id}
											/>
										)
									},
									{
										field: "period"
									},
									{
										field: "instructor",
										cellRenderer: ({ data }) => (
											<div>{data.instructor.name}</div>
										)
									},
									{
										field: "className",
										cellRenderer: ({ data }) => (
											<div>{data.gym_class.name}</div>
										)
									}
								]}
							/>
						</div>
					))
				) : (
					<></>
				)}
				<AdminSession
					show={showPopUp}
					handlePopUp={handleProductPopUp}
				/>
			</div>
			<Outlet />
		</div>
	)
}

export default AdminSessions
