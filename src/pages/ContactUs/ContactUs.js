import React, { useState } from "react"
import "./ContactUs.css"
import contactUs from "../../assets/images/contact-bg.jpg"
import Footer from "../../components/Footer/Footer"
import { useNavigate } from "react-router-dom"
import { useAtom } from "jotai"
import { userAtom } from "../../store/atoms"

const ContactUs = () => {
	const navigate = useNavigate()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [subject, setSubject] = useState("")
	const [message, setMessage] = useState("")
	const [user, setUser] = useAtom(userAtom)

	return (
		<div className="ContactUs">
			<div className="ContactUs-bg">
				<img src={contactUs} alt="Contact Background" />
			</div>
			<div className="ContactUs-Content">
				<div className="ContactUs-Message">
					<h1>Get in touch</h1>
					<p>
						Hello there! We love hearing from our readers! Whether
						you have a question, suggestion, or just want to say
						hello, we're here for you. Your feedback is invaluable,
						and we appreciate you being a part of our community.
						Best regards, Crossfit Team.
					</p>
				</div>
				<div className="ContactUs-form">
					<div className="input-group">
						<div className="flex">
							<div className="placeholder"></div>
							<input
								value={name}	
								className="name-input"
								type="text"
								placeholder="Name"
								onChange={(e) => setName(e.target.value)}
							/>
							<div className="placeholder"></div>
							<input
								value={email}
								className="email-input"
								type="email"
								placeholder="example@hotmail.com"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className="input-holder">
						<div className="placeholder"></div>
						<input
							value={subject}
							className="subject-input"
							type="text"
							placeholder="Subject"
							onChange={(e) => setSubject(e.target.value)}
						/>
					</div>
					<div className="input-holder">
						<div className="placeholder"></div>
						<textarea
							value={message}
							className="message-input"
							placeholder="Your message..."
							onChange={(e) => setMessage(e.target.value)}
							rows="5"
						/>
					</div>
					{!isNaN(user.id) ? (
						<div
							onClick={() => {
								setEmail("")
								setName("")
								setSubject("")
								setMessage("")
							}}
							className="ContactUs-submit">
							Send
						</div>
					) : (
						<div className="text">To contact us, please<button className="text-button" onClick={() => navigate("/")}>Login.</button></div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ContactUs
