import "./Home.css"
import crossfit from "../../assets/images/crossfit.png"
import fitness from "../../assets/images/fitness.png"
import climbing from "../../assets/images/climbing.png"
import stretching from "../../assets/images/stretching.png"
import lifestyle from "../../assets/images/lifestyle.jpg"
import { useNavigate } from "react-router-dom"

const Home = () => {
	const navigate = useNavigate()
	return (
		<div className="Home">
			<div className="intro">
				<div className="intro-title">What Is Crossfit?</div>
				<div className="intro-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Quis ipsum suspendisse ultrices gravida. Risus
					commodo viverra maecenas accumsan lacus vel facilisis.
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
						<div className="icon-title">Cardio & Stretching</div>
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
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Quis ipsum suspendisse ultrices
							gravida. Risus commodo viverra maecenas accumsan
							lacus vel facilisis. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Quis
							ipsum suspendisse ultrices gravida. Risus commodo
							viverra maecenas accumsan lacus vel facilisis.
						</div>
					</div>
					<img src={lifestyle} alt="lifestyle" />
				</div>
			</div>
		</div>
	)
}

export default Home
