import React from "react"
import Home from "../pages/Home/Home"
import { Routes, Route, useNavigate } from "react-router-dom"
import Classes from "../pages/Classes/Classes"
import AboutUs from "../pages/AboutUs/AboutUs"
import Products from "../pages/Products/Products"
import ContactUs from "../pages/ContactUs/ContactUs"
import AdminHome from "../pages/AdminHome/AdminHome"
import AdminProducts from "../pages/AdminProducts/AdminProducts"
import AdminClasses from "../pages/AdminClasses/AdminClasses"
import AdminInstructors from "../pages/AdminInstructors/AdminInstructors"
import AdminSessions from "../pages/AdminSessions/AdminSessions"
import AdminPersonalTrainers from "../pages/AdminPersonalTrainers/AdminPersonalTrainers"
import AdminMembers from "../pages/AdminMembers/AdminMembers"
import AdminBookings from "../pages/AdminBookings/AdminBookings"
import AdminClass from "../Components/AdminClass/AdminClass"
import AdminProduct from "../Components/AdminProduct/AdminProduct"
import AdminInstructor from "../Components/AdminInstructor/AdminInstructor"
import AdminSession from "../Components/AdminSession/AdminSession"
import AdminPersonalTrainer from "../Components/AdminPersonalTrainer/AdminPersonalTrainer"
import AdminMember from "../Components/AdminMember/AdminMember"
import AdminBooking from "../Components/AdminBooking/AdminBooking"

const ScreenRoutes = () => {
	const navigate = useNavigate()
	const handlePopUp = () => {
		navigate(-1)
	}
	return (
		<Routes>
			<Route path={"/"} element={<Home />} />
			<Route path={"/about_us"} element={<AboutUs />} />
			<Route path={"/classes"} element={<Classes />} />
			<Route path={"/products"} element={<Products />} />
			<Route path={"/contact_us"} element={<ContactUs />} />
			<Route path="/admin_panel/" element={<AdminHome />} />
			<Route path="/admin_panel/products" element={<AdminProducts />}>
				<Route
					path="/admin_panel/products/edit_products/:id"
					element={
						<AdminProduct show={true} handlePopUp={handlePopUp} />
					}
				/>
			</Route>
			<Route path="/admin_panel/classes" element={<AdminClasses />}>
				<Route
					path="/admin_panel/classes/edit_gym_classes/:id"
					element={
						<AdminClass show={true} handlePopUp={handlePopUp} />
					}
				/>
			</Route>
			<Route
				path="/admin_panel/instructors"
				element={
					<AdminInstructors show={true} handlePopUp={handlePopUp} />
				}>
				<Route
					path="/admin_panel/instructors/edit_instructors/:id"
					element={
						<AdminInstructor
							show={true}
							handlePopUp={handlePopUp}
						/>
					}
				/>
			</Route>
			<Route path="/admin_panel/sessions" element={<AdminSessions />}>
				<Route
					path="/admin_panel/sessions/edit_sessions/:id"
					element={
						<AdminSession show={true} handlePopUp={handlePopUp} />
					}
				/>
			</Route>
			<Route
				path="/admin_panel/personal_trainers"
				element={<AdminPersonalTrainers />}>
				<Route
					path="/admin_panel/personal_trainers/edit_personal_trainers/:id"
					element={
						<AdminPersonalTrainer
							show={true}
							handlePopUp={handlePopUp}
						/>
					}
				/>
			</Route>
			<Route path="/admin_panel/members" element={<AdminMembers />}>
				<Route
					path="/admin_panel/members/edit_members/:id"
					element={
						<AdminMember show={true} handlePopUp={handlePopUp} />
					}
				/>
			</Route>
			<Route path="/admin_panel/bookings" element={<AdminBookings />}>
				<Route
					path="/admin_panel/bookings/edit_bookings/:id"
					element={
						<AdminBooking show={true} handlePopUp={handlePopUp} />
					}
				/>
			</Route>
		</Routes>
	)
}

export default ScreenRoutes
