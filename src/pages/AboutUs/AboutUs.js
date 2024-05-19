import React, { useState } from "react"
import "./AboutUs.css"
import aboutUs from "../../assets/images/about-img.jpg"
import imgbg from "../../assets/images/aboutus-bg.jpg"
import before from "../../assets/images/before.png"
import after from "../../assets/images/after.png"
import Footer from "../../components/Footer/Footer"

const AboutUs = () => {
	const [cardNum, setCardNum] = useState(0)
	const toggleBefore = () => {
		if (cardNum === 0) {
			setCardNum(2)
		} else {
			setCardNum(cardNum - 1)
		}
	}
	const toggleAfter = () => {
		if (cardNum === 2) {
			setCardNum(0)
		} else {
			setCardNum(cardNum + 1)
		}
	}
	return (
		<div>
			<img
				src={imgbg}
				alt="aboutus"
				style={{ maxWidth: "100%", height: "auto" }}
			/>
			<div className="AboutUs-Body">
				<div className="cards">
					<img
						className="toggle"
						onClick={toggleBefore}
						src={before}
						alt="before"
					/>
					<div className="AboutUs-Title">
						{cardNum === 0 ? (
							<div className="welcome">
								<h2>Welcome</h2>
								<p>
									Welcome to our fitness sanctuary, where
									health meets inspiration. At our gym, we
									believe in the transformative power of
									fitness to elevate both body and mind.
									Unleash your potential with state-of-the-art
									equipment, expert trainers, and a vibrant
									community that supports your wellness
									journey. Whether you're a beginner or a
									seasoned fitness enthusiast, our dedicated
									space is designed to empower you, boost your
									energy, and sculpt a healthier, stronger
									you. Elevate your fitness experience with us
									– where every workout is a step toward a
									more vibrant, confident, and resilient
									version of yourself
								</p>
							</div>
						) : (
							<></>
						)}
						{cardNum === 1 ? (
							<div className="about">
								<h2>About Us</h2>
								<p>
									At our gym, we take pride in more than just
									providing top-notch fitness facilities –
									we're dedicated to helping our members
									thrive. Our expert team is committed to
									guiding and supporting you on your fitness
									journey, ensuring that every workout is
									tailored to your goals and abilities. From
									personalized training plans to nutritional
									advice, we're here to empower you at every
									step. Our gym is not just a place to
									exercise; it's a community where
									encouragement and motivation are woven into
									every session. Join us and experience a
									fitness haven where your success is our
									priority. Together, we'll achieve your
									health and wellness aspirations.
								</p>
							</div>
						) : (
							<></>
						)}
						{cardNum === 2 ? (
							<div className="mission">
								<h2>Our Mission</h2>
								<p>
									At our gym, we're not just shaping bodies;
									we're shaping the future of fitness. As we
									embark on a journey into the next era, we're
									committed to introducing cutting-edge
									technologies, innovative workout programs,
									and a wellness approach that transcends
									traditional boundaries. Picture a gym where
									virtual reality meets real results, where
									personalized fitness plans seamlessly
									integrate with the latest advancements. The
									future of our gym is about redefining
									possibilities, breaking barriers, and
									fostering a community that embraces the
									evolution of well-being. Join us on this
									exciting path forward, where the future of
									fitness is yours to explore and conquer.
								</p>
							</div>
						) : (
							<></>
						)}
					</div>
					<img
						className="toggle"
						onClick={toggleAfter}
						src={after}
						alt="after"
					/>
				</div>
				<img
					className="AboutUs-Image"
					src={aboutUs}
					alt="Green Room with Weights"
				/>
			</div>
			<Footer />
		</div>
	)
}

export default AboutUs
