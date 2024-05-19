import React, { useEffect } from "react"
import AdminInstructor from "../../components/AdminInstructor/AdminInstructor"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { getInstructors } from "../../axios/axios"
import Actions from "../../components/Actions/Actions"
import Table from "../../components/Table/Table"
import "./AdminInstructors.css"
import add from "../../assets/images/add.png"
import refresh from "../../assets/images/refresh.png"
import Sidebar from "../../components/Sidebar/Sidebar"

const AdminInstructors = () => {
	const [showPopUp, setShowPopUp] = useState(false)
	const [rowData, setRowData] = useState([])

	const handleData = async () => {
		const r = await getInstructors()
		setRowData(r)
	}

	useEffect(() => {
		handleData()
	}, [window.location.pathname])

	const handlePopUp = () => {
		setShowPopUp(!showPopUp)
		handleData()
	}

	return (
		<div className="AdminInstructors">
			<Sidebar />
			<div className="page">
				<div className="handle-data">
					<div onClick={handlePopUp} className="add-item">
						<img src={add} alt="add" className="handle-data-icon" />
						Add Instructor
					</div>
					<div onClick={() => handleData()} className="refresh-table">
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
										address={"instructors"}
										id={data.id}
									/>
								)
							},
							...Object.keys(rowData[0])
								.filter((v) => v !== "id")
								.map((v) => ({
									field: v
								}))
						]}
					/>
				)}
				<AdminInstructor show={showPopUp} handlePopUp={handlePopUp} />
			</div>
			<Outlet />
		</div>
	)
}

export default AdminInstructors
