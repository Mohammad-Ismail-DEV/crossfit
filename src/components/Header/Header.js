import React, { useState } from "react"
import "./Header.css"
import { useNavigate } from "react-router-dom"
import userImage from "../../assets/images/user.jpg"
import logout from "../../assets/images/power-off.png"
import scheduleImage from "../../assets/images/schedule.png"
import Schedule from "../Schedule/Schedule"

const Header = () => {
	const navigate = useNavigate()
	const path = window.location.pathname
	const [user, setUser] = useState({ name: "", role: "" })
	const [popUp, setPopUp] = useState("")
	const togglePopUp = (type) => {
		setPopUp(type)
		document.body.style.overflow = "hidden"
		if (type === "") {
			document.body.style.overflow = "unset"
		}
	}
	const [dropDown, setDropDown] = useState(false)
	const handleDropDown = () => {
		setDropDown(!dropDown)
	}
	const handleLogout = () => {
		setUser({ name: "", role: "" })
		handleDropDown()
	}

	const data = {
		email: "",
		name: "",
		password: "",
		repeatPassword: "",
		phoneNumber: ""
	}

	const handleLogin = () => {
		console.log("data", data)
	}
	const handleRegister = () => {
		setUser({ ...user, ...data })
		if (data.password === data.repeatPassword) {
			console.log("data", data)
			setPopUp("")
			document.body.style.overflow = "unset"
		}
	}
	const schedule = [
		[
			{
				instructor: "Coach Zeina",
				time: "9:30 - 10:30 AM",
				class: "Dance Blend"
			},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{}
		],
		[
			{},
			{},
			{
				class: "Aerobics Body Pump",
				instructor: "Coach Sam",
				time: "10:30 - 11:30 Am"
			},
			{},
			{},
			{},
			{},
			{},
			{}
		],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}]
	]

	return (
		<div className="Header">
			<div onClick={() => navigate("/")} className="title">
				<div className="title-b">Cross</div>
				<div className="title-g">Fit</div>
			</div>
			<div className="nav-links">
				<div
					onClick={() => navigate("/")}
					className={`${
						path === "/" ? "active-nav-link" : "nav-link"
					}`}>
					<div>
						<div className="gd"></div>
						<div>HOME</div>
					</div>
				</div>
				<div
					onClick={() => navigate("/about-us")}
					className={`${
						path === "/about-us" ? "active-nav-link" : "nav-link"
					}`}>
					<div>
						<div className="gd"></div>
						<div>ABOUT US</div>
					</div>
				</div>
				<div
					onClick={() => navigate("/classes")}
					className={`${
						path === "/classes" ? "active-nav-link" : "nav-link"
					}`}>
					<div>
						<div className="gd"></div>
						<div>CLASSES</div>
					</div>
				</div>
				<div
					onClick={() => navigate("/products")}
					className={`${
						path === "/products" ? "active-nav-link" : "nav-link"
					}`}>
					<div>
						<div className="gd"></div>
						<div>PRODUCTS</div>
					</div>
				</div>
				<div
					onClick={() => navigate("/contact-us")}
					className={`${
						path === "/contact-us" ? "active-nav-link" : "nav-link"
					}`}>
					<div className="gd"></div>
					<div>CONTACT US</div>
				</div>
			</div>
			{user.name ? (
				<div classname="logged-in">
					<div className="my-classes"></div>
					<div onClick={handleDropDown} className="user">
						<div className="user-image-holder">
							<img
								className="user-image"
								src={userImage}
								alt="user"
							/>
						</div>
						<div className="user-name">
							{user.name.charAt(0).toUpperCase() +
								user.name.slice(1)}
						</div>
					</div>
				</div>
			) : (
				<div className="handle-user">
					<div
						className="register"
						onClick={() => togglePopUp("register")}>
						<div className="dash"></div>
						Register
					</div>
					<div className="login" onClick={() => togglePopUp("login")}>
						<div className="dash"></div>
						Login
					</div>
				</div>
			)}
			{popUp === "login" ? (
				<div
					className="popUp"
					onClick={(event) => {
						if (event.target !== event.currentTarget) return
						togglePopUp("")
					}}>
					<div className="form">
						<div className="input-holder">
							<div className="placeholder-login">Email</div>
							<input
								onChange={(e) => (data.email = e.target.value)}
								className="input"
								type="email"
							/>
						</div>
						<div className="input-holder">
							<div className="placeholder-login">Password</div>
							<input
								onChange={(e) =>
									(data.password = e.target.value)
								}
								className="input"
								type="password"
							/>
						</div>
						<div onClick={handleLogin} className="submit-login">
							Login
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
			{popUp === "register" ? (
				<div
					className="popUp"
					onClick={(event) => {
						if (event.target !== event.currentTarget) return
						togglePopUp("")
					}}>
					<div className="form">
						<div className="input-holder">
							<div className="placeholder-register">Name</div>
							<input
								onChange={(e) => (data.name = e.target.value)}
								className="input"
							/>
						</div>
						<div className="input-holder">
							<div className="placeholder-register">Email</div>
							<input
								onChange={(e) => (data.email = e.target.value)}
								className="input"
								type="email"
							/>
						</div>
						<div className="input-holder">
							<div className="placeholder-register">Password</div>
							<input
								onChange={(e) =>
									(data.password = e.target.value)
								}
								className="input"
								type="password"
							/>
						</div>
						<div className="input-holder">
							<div className="placeholder-register">
								Repeat Password
							</div>
							<input
								onChange={(e) =>
									(data.repeatPassword = e.target.value)
								}
								className="input"
								type="password"
							/>
						</div>
						<div className="input-holder">
							<div className="placeholder-register">
								Phone Number
							</div>
							<input
								onChange={(e) =>
									(data.phoneNumber = e.target.value)
								}
								className="input"
							/>
						</div>
						<div
							onClick={handleRegister}
							className="submit-register">
							Register
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
			{popUp === "schedule" ? (
				<div
					className="popUp"
					onClick={(event) => {
						if (event.target !== event.currentTarget) return
						togglePopUp("")
					}}>
					<div className="schedule-holder">
						<Schedule schedule={schedule} />
					</div>
				</div>
			) : (
				<></>
			)}
			{dropDown ? (
				<div className="drop-down">
					<div
						onClick={() => {
							handleDropDown()
							togglePopUp("schedule")
						}}
						className="drop-down-item">
						<div className="drop-down-image-holder">
							<img
								className="drop-down-image"
								src={scheduleImage}
								alt="schedule"
							/>
						</div>
						My Classes
					</div>
					<div onClick={handleLogout} className="drop-down-item">
						<div className="drop-down-image-holder">
							<img
								className="drop-down-image"
								src={logout}
								alt="logout"
							/>
						</div>
						logout
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	)
}

export default Header
