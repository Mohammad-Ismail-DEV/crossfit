import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import ScreenRoutes from "./routes/ScreenRoutes"

function App() {
	return (
		<BrowserRouter>
			<ScreenRoutes />
		</BrowserRouter>
	)
}

export default App
