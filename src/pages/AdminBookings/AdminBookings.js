import React, { useEffect, useState } from "react"
import AdminPersonalTrainer from "../../components/AdminPersonalTrainer/AdminPersonalTrainer"
import Table from "../../components/Table/Table"
import { Outlet } from "react-router-dom"
import Actions from "../../components/Actions/Actions"
import { getBookings } from "../../axios/axios"
import add from "../../assets/images/add.png"
import refresh from "../../assets/images/refresh.png"
import "./AdminBookings.css"
import AdminBooking from "../../components/AdminBooking/AdminBooking"
import Sidebar from "../../components/Sidebar/Sidebar"

const AdminBookings = () => {
	const [showPopUp, setShowPopUp] = useState(false)
	const [rowData, setRowData] = useState([])

	const handleData = async () => {
		const r = await getBookings()
		setRowData(r)
	}

	useEffect(() => {
		handleData()
	}, [window.location.pathname])

	const handleProductPopUp = () => {
		setShowPopUp(!showPopUp)
		handleData()
	}
	return (
		<div className="AdminBookings">
			<Sidebar />
			<div className="page">
				<div className="handle-data">
					<div onClick={handleProductPopUp} className="add-item">
						<img src={add} alt="add" className="handle-data-icon" />
						Add Booking
					</div>
					<div onClick={handleData} className="refresh-table">
						<img
							src={refresh}
							alt="refresh"
							className="handle-data-icon"
						/>
						Refresh Data
					</div>
				</div>
				{rowData.length !== 0 && (
					<Table
						rowData={rowData}
						colDefs={[
							{
								field: "actions",
								cellRenderer: ({ data }) => (
									<Actions
										handleData={handleData}
										address={"bookings"}
										id={data.id}
									/>
								)
							},
							{
								field: "member",
								cellRenderer: ({ data }) => (
									<div>{data.member.name}</div>
								)
							},
							{
								field: "personal Trainer",
								cellRenderer: ({ data }) => (
									<div>{data.personal_trainer.name}</div>
								)
							}
						]}
					/>
				)}
				<AdminBooking
					show={showPopUp}
					handlePopUp={handleProductPopUp}
				/>
			</div>
			<Outlet />
		</div>
	)
}

export default AdminBookings
