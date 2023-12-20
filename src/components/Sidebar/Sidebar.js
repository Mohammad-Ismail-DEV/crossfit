import React from "react"
import { useNavigate } from "react-router-dom"
import "./Sidebar.css"

const Sidebar = () => {
	const navigate = useNavigate()
	return (
		<div className="Sidebar">
			<div
				onClick={() => navigate("/admin_panel/products")}
				className={`${
					window.location.pathname === "/admin_panel/products"
						? "active-sidebar-link"
						: "sidebar-link"
				}`}>
				Products
			</div>
			<div
				onClick={() => navigate("/admin_panel/classes")}
				className={`${
					window.location.pathname === "/admin_panel/classes"
						? "active-sidebar-link"
						: "sidebar-link"
				}`}>
				Classes
			</div>
			<div
				onClick={() => navigate("/admin_panel/instructors")}
				className={`${
					window.location.pathname === "/admin_panel/instructors"
						? "active-sidebar-link"
						: "sidebar-link"
				}`}>
				Instructors
			</div>
			<div
				onClick={() => navigate("/admin_panel/sessions")}
				className={`${
					window.location.pathname === "/admin_panel/sessions"
						? "active-sidebar-link"
						: "sidebar-link"
				}`}>
				Sessions
			</div>
			<div
				onClick={() => navigate("/admin_panel/personal_trainers")}
				className={`${
					window.location.pathname ===
					"/admin_panel/personal_trainers"
						? "active-sidebar-link"
						: "sidebar-link"
				}`}>
				Personal Trainers
			</div>
			<div
				onClick={() => navigate("/admin_panel/members")}
				className={`${
					window.location.pathname === "/admin_panel/members"
						? "active-sidebar-link"
						: "sidebar-link"
				}`}>
				Members
			</div>
			<div
				onClick={() => navigate("/admin_panel/bookings")}
				className={`${
					window.location.pathname === "/admin_panel/bookings"
						? "active-sidebar-link"
						: "sidebar-link"
				}`}>
				Bookings
			</div>
		</div>
	)
}

export default Sidebar
