import React, { useEffect } from "react"
import AdminProduct from "../../components/AdminProduct/AdminProduct"
import { useState } from "react"
import "./AdminProducts.css"
import Table from "../../components/Table/Table"
import { Outlet } from "react-router-dom"
import Actions from "../../components/Actions/Actions"
import { getProducts } from "../../axios/axios"
import add from "../../assets/images/add.png"
import refresh from "../../assets/images/refresh.png"
import Sidebar from "../../components/Sidebar/Sidebar"
import Image from "../../components/Image/Image"

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
			<Sidebar />
			<div className="page">
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
						rowHeight={75}
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
								.filter((v) => v !== "id" && v !== "image")
								.map((v) => ({
									field: v
								})),
							{
								field: "image",
								cellRenderer: ({ data }) => (
									<Image
										fromServer
										src={data?.image}
										alt="Product"
										style={{
											height: "70px",
											width: "70px"
										}}
									/>
								)
							}
						]}
					/>
				)}
				<AdminProduct
					show={showPopUp}
					handlePopUp={handleProductPopUp}
				/>
			</div>
			<Outlet />
		</div>
	)
}

export default AdminProducts
