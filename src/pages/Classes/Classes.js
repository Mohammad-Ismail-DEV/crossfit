import React from "react";
import './Classes.css'
import classbg from "../../assets/images/classes-bg.jpg";
import tablebg from "../../assets/images/classes-time-bg.jpg"
import crossfit from "../../assets/images/crossfit.png"
import fitness from "../../assets/images/fitness.png"
import climbing from "../../assets/images/climbing.png"
import stretching from "../../assets/images/stretching.png"
import yoga from "../../assets/images/yoga.png"
import { useNavigate } from "react-router-dom"



const Classes = () => {
	const navigate = useNavigate()
  return (
	<div>
    <div className="classes-bg">
    	<img 
	  		src={classbg}
	  		alt="classes" 
		/>
    </div>
	<div className="gym">
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
					<div
						onClick={() => navigate("/classes")}
						className="icon-holder">
						<img
							className="icon-image"
							src={yoga}
							alt="stretching"
						/>
						<div className="icon-title">Yoga</div>
					</div>
					
	</div>
	</div>
		<img src={tablebg}/>
	</div>
  );
}



export default Classes;
