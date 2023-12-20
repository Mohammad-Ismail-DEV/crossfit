import React, { useEffect } from "react"
import AdminProduct from "../../Components/AdminProduct/AdminProduct"
import { useState } from "react"
import "./AdminProducts.css"
import Table from "../../Components/Table/Table"
import { Outlet } from "react-router-dom"
import Actions from "../../Components/Actions/Actions"
import { getProducts } from "../../axios/axios"
import add from "../../assets/images/add.png"
import refresh from "../../assets/images/refresh.png"

const AdminProducts = () => {
	const [showPopUp, setShowPopUp] = useState(false)
	const [rowData, setRowData] = useState([])

	const handleData = async () => {
		const r = await getProducts()
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
		<div className="AdminProducts">
			<div className="handle-data">
				<div onClick={handleProductPopUp} className="add-item">
					<img src={add} alt="add" className="handle-data-icon" />
					Add Product
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
									address={"products"}
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
			<AdminProduct show={showPopUp} handlePopUp={handleProductPopUp} />
			<Outlet />
		</div>
	)
}

export default AdminProducts
