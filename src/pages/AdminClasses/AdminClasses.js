import React, { useEffect } from "react"
import AdminClass from "../../Components/AdminClass/AdminClass"
import { useState } from "react"
import "./AdminClasses.css"
import { Outlet } from "react-router-dom"
import { getClasses } from "../../axios/axios"
import Actions from "../../Components/Actions/Actions"
import Table from "../../Components/Table/Table"
import add from "../../assets/images/add.png"
import refresh from "../../assets/images/refresh.png"
import Sidebar from "../../Components/Sidebar/Sidebar"

const AdminClasses = () => {
	const [showPopUp, setShowPopUp] = useState(false)
	const [rowData, setRowData] = useState([])

	const handleData = async () => {
		const r = await getClasses()
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
		<div className="AdminClasses">
			<Sidebar />
			<div className="page">
				<div className="handle-data">
					<div onClick={handlePopUp} className="add-item">
						<img src={add} alt="add" className="handle-data-icon" />
						Add Class
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
										address={"gym_classes"}
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
				<AdminClass show={showPopUp} handlePopUp={handlePopUp} />
			</div>
			<Outlet />
		</div>
	)
}

export default AdminClasses
