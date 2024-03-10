import { BrowserRouter } from "react-router-dom"
import ScreenRoutes from "./routes/ScreenRoutes"
import Header from "./Components/Header/Header"
import "./App.css"

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<ScreenRoutes />
			</div>
		</BrowserRouter>
	)
}

export default App
