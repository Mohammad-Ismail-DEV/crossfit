import React from "react"
import './ContactUs.css'
import contactUs from "../../assets/images/ContactUs.jpg"

const ContactUs = () => {
	return (
		<div className="fullBody">
			
			<div className="form">
						<div className="input-holder">
							<div className="placeholder">Name</div>
							<input
								className="input"
								type="text"
								placeholder="Name"
							/>
						</div>
						<div className="input-holder">
							<div className="placeholder">Phone Number</div>
							<input
								className="input"
								type="text"
								placeholder="Phone Number"
							/>
						</div>
						<div className="input-holder">
							<div className="placeholder">Email</div>
							<input
								className="input"
								type="email"
								placeholder="example@hotmail.com"
							/>
						</div>
						<div className="input-holder">
							<div className="placeholder">Subject</div>
							<input
								className="input"
								type="text"
								placeholder="Subject"
							/>
						</div>
						<div className="input-holder">
							<div className="placeholder">Message</div>
							<input
								className="input"
								type="text"
								placeholder="Message"
							/>
						</div>
						<div className="submit">
							Submit
						</div>
			</div>
			<div className="gymImage">
				<img
        			src={contactUs}
        			alt="Contact Us"
      			/>
    		</div>
		</div>
	);
}

export default ContactUs
