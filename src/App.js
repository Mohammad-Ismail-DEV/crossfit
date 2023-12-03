import { BrowserRouter } from "react-router-dom"
import ScreenRoutes from "./routes/ScreenRoutes"
import Header from "./components/Header/Header"

function App() {
	return (
		<BrowserRouter>
			<Header />
			<ScreenRoutes />
		</BrowserRouter>
	)
}

export default App
