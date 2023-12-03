import "./Home.css"
import Schedule from "../../components/Schedule/Schedule"

const Home = () => {
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
		<div>
			<Schedule schedule={schedule} />
		</div>
	)
}

export default Home
