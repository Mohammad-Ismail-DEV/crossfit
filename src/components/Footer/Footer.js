import React from "react"
import { useNavigate } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
	const navigate = useNavigate()
	return (
		<div className="Footer">
			<div className="title">Come & Train With Us</div>
			<div className="description">
				Join us and have access to all our classes and professional
				coaches and personal trainers.
			</div>
			<div onClick={() => navigate("/classes")} className="button">
				JOIN NOW
			</div>
		</div>
	)
}

export default Footer
