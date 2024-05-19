import React, { useEffect } from "react"
import AdminMember from "../../components/AdminMember/AdminMember"
import { useState } from "react"
import Table from "../../components/Table/Table"
import { Outlet } from "react-router-dom"
import Actions from "../../components/Actions/Actions"
import { getMembers } from "../../axios/axios"
import "./AdminMembers.css"
import refresh from "../../assets/images/refresh.png"
import Sidebar from "../../components/Sidebar/Sidebar"

const AdminMembers = () => {
	const [showPopUp, setShowPopUp] = useState(false)
	const [rowData, setRowData] = useState([])

	const handleData = async () => {
		const r = await getMembers()
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
		<div className="AdminMembers">
			<Sidebar />
			<div className="page">
				<div className="handle-data">
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
										address={"members"}
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
				<AdminMember show={showPopUp} handlePopUp={handlePopUp} />
			</div>
			<Outlet />
		</div>
	)
}

export default AdminMembers
