import React, { useEffect, useState } from "react"
import AdminPersonalTrainer from "../../Components/AdminPersonalTrainer/AdminPersonalTrainer"
import Table from "../../Components/Table/Table"
import { Outlet } from "react-router-dom"
import Actions from "../../Components/Actions/Actions"
import { getPersonalTrainers } from "../../axios/axios"
import add from "../../assets/images/add.png"
import refresh from "../../assets/images/refresh.png"
import "./AdminPersonalTrainers.css"

const AdminPersonalTrainers = () => {
	const [showPopUp, setShowPopUp] = useState(false)
	const [rowData, setRowData] = useState([])

	const handleData = async () => {
		const r = await getPersonalTrainers()
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
		<div className="AdminPersonalTrainers">
			<div className="handle-data">
				<div onClick={handleProductPopUp} className="add-item">
					<img src={add} alt="add" className="handle-data-icon" />
					Add Personal Trainer
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
									address={"personal_trainers"}
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
			<AdminPersonalTrainer
				show={showPopUp}
				handlePopUp={handleProductPopUp}
			/>
			<Outlet />
		</div>
	)
}

export default AdminPersonalTrainers
