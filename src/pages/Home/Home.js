import "./Home.css"
import crossfit from "../../assets/images/crossfit.png"
import fitness from "../../assets/images/fitness.png"
import climbing from "../../assets/images/climbing.png"
import stretching from "../../assets/images/stretching.png"
import lifestyle from "../../assets/images/lifestyle.jpg"
import { useNavigate } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"

const Home = () => {
	const navigate = useNavigate()
	return (
		<div className="Home">
			<div className="intro">
				<div className="intro-title">What Is Crossfit?</div>
				<div className="intro-description">
					Our health and fitness center management system will
					function as a centralized platform that offers membership
					management, appointment scheduling, workout tracking, and
					administrative tools. It will provide members with access to
					personalized workout plans, registration for classes, and a
					community forum. The system will support staff in managing
					memberships, scheduling classes, and monitoring equipment
					maintenance.
				</div>
			</div>
			<div className="gym">
				<div className="gd-big"></div>
				<div className="gym-title">Join Our Gym Today</div>
				<div className="gym-description">
					Our gym provides you with the best practices to help you
					achieve what you desire and more. With a variety of classes,
					workouts, and machines, the sky is your limit!
				</div>
				<div className="icons">
					<div
						onClick={() => navigate("/classes")}
						className="icon-holder">
						<img
							className="icon-image"
							src={crossfit}
							alt="crossfit"
						/>
						<div className="icon-title">Crossfit</div>
					</div>
					<div
						onClick={() => navigate("/classes")}
						className="icon-holder">
						<img
							className="icon-image"
							src={fitness}
							alt="fitness"
						/>
						<div className="icon-title">Fitness</div>
					</div>
					<div
						onClick={() => navigate("/classes")}
						className="icon-holder">
						<img
							className="icon-image"
							src={climbing}
							alt="climbing"
						/>
						<div className="icon-title">Climbing</div>
					</div>
					<div
						onClick={() => navigate("/classes")}
						className="icon-holder">
						<img
							className="icon-image"
							src={stretching}
							alt="stretching"
						/>
						<div className="icon-title">Cardio</div>
					</div>
				</div>
			</div>
			<div className="testimonials">
				<div className="testimony">
					“During the hard times, it’s important to focus on the
					things you can change in that moment instead of what you
					should have or could have done differently.”
				</div>
				<div className="witness">
					<div className="witness-name">Annie Thorisdottir</div>,
					<div className="witness-description">Crossfit athlete</div>
				</div>
			</div>
			<div className="lifestyle">
				<div className="flex-row">
					<div className="lifestyle-text">
						<div className="gd-big"></div>
						<div className="lifestyle-title">Lifestyle & Diet</div>
						<div className="lifestyle-description">
							Eating healthy involves making consious choices to
							nourish your body with nutrient-rich foods that
							support overall well-being. This includes
							incorporating a variety of fruits, vegetables, whole
							grains, lean proteins, and healthy fats into your
							diet while minimizing processed foods, sugars, and
							excessive fats. A balanced diet provides vitamins,
							minerals, and antioxidants necessary for optimal
							phyiscal and mental health, helping to prevent
							chronic diseases and maintain a healthy weight.
							Adopting healthy eating habits not only fuels your
							body for energy and vitality but also fosters a
							prositive relationship with food, promoting
							long-term health and wellness.
						</div>
					</div>
					<img src={lifestyle} alt="lifestyle" />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Home
