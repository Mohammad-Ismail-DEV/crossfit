import React, { useEffect, useState } from "react"
import "./Header.css"
// react-router-dom btetna2al ben saf7at
import { useNavigate } from "react-router-dom"
// btjeeb sowar w bt7ot esma la test3mla
import userImage from "../../assets/images/user.jpg"
import logout from "../../assets/images/power-off.png"
import scheduleImage from "../../assets/images/schedule.png"
import terminalImage from "../../assets/images/terminal.png"
import {
	getMembers,
	postMember
} from "../../axios/axios"
import Schedule from "../Schedule/Schedule"
import { useAtom } from "jotai"
import {  userAtom } from "../../store/atoms"

const Header = () => {
	// line 21 and 22 btetna2al ben saf7at
	const navigate = useNavigate()
	const path = window.location.pathname
	// user & popup old values -- setUser & setPopUp new values
	const [user, setUser] = useAtom(userAtom)
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
		if (user.role === "admin") {
			navigate("/")
		}
		setUser({})
		handleDropDown()
	}

	const data = {
		email: "",
		name: "",
		password: "",
		repeatPassword: "",
		phone_number: ""
	}

	const handleSchedule = async () => {
		const r = await getMembers({
			id: user.id
		})
		setUser(r)
	}

	// tjble l memember tafaseelo
	const handleLogin = async () => {
		const r = await getMembers({
			email: data.email,
			password: data.password
		})
		if(r.length>0){
			setUser(r[0])
			setPopUp("")
			document.body.style.overflow = "unset"
		}else{
			alert("Wrong email or password")
		}

	}
	// twafit new member (user) 3al database 3l register
	const handleRegister = async () => {
		if (data.password === data.repeatPassword) {
			const r = await postMember(data)
			setUser(r)
			setPopUp("")
			document.body.style.overflow = "unset"
		}
	}

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
					onClick={() => navigate("/about_us")}
					className={`${
						path === "/about_us" ? "active-nav-link" : "nav-link"
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
					onClick={() => navigate("/contact_us")}
					className={`${
						path === "/contact_us" ? "active-nav-link" : "nav-link"
					}`}>
					<div className="gd"></div>
					<div>CONTACT US</div>
				</div>
			</div>
			{/* user.name tbayin esem l user bas ta3ml login */}
			{user.name ? (
				<div className="logged-in">
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
							{/* bas awal 7aref mnil esem l 3mlna 3le login ykun capital letter */}
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



			{/* eza kabasna register shu l tafaseel bt3teena */}
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
									(data.phone_number = e.target.value)
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

			{/* eza kabasna 3l login hode l tafaseel */}
			{popUp === "schedule" ? (
				<div
					className="popUp"
					onClick={(event) => {
						if (event.target !== event.currentTarget) return
						togglePopUp("")
					}}>
					<div className="schedule-holder">
						<Schedule schedule={user.sessions} />
					</div>
				</div>
			) : (
				<></>
			)}
			{dropDown ? (
				<div className="drop-down">
					{user.role === "admin" ? (
						<div
							onClick={() => {
								handleDropDown()
								navigate("/admin_panel")
							}}
							className="drop-down-item">
							<div className="drop-down-image-holder">
								<img
									className="drop-down-image"
									src={terminalImage}
									alt="schedule"
								/>
							</div>
							Admin Panel
						</div>
					) : (
						<div
							onClick={() => {
								handleDropDown()
								handleSchedule()
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
					)}
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
