import React from "react"
import "./Header.css"
import { useNavigate } from "react-router-dom"
import { handleLogin } from "../../axios/axios"

const Header = () => {
	const navigate = useNavigate()
	const user = {
		role: "admin",
		admin: true
	}

	const data = {
		email: "",
		password: ""
	}

	const handleNavigate = (path) => {
		// navigate(`/${path}`)
		handleLogin({ data })
	}
	return (
		<div>
			Header
			{user.admin ? (
				<button onClick={() => handleNavigate("dashboard")}>
					Dashboard
				</button>
			) : (
				<></>
			)}
			<input
				onChange={(e) => (data.email = e.target.value)}
				type="email"
				placeholder="email"
			/>
			<input
				onChange={(e) => (data.password = e.target.value)}
				type="password"
				placeholder="passsword"
			/>
		</div>
	)
}

export default Header
