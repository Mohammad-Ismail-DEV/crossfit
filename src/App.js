import { BrowserRouter } from "react-router-dom"
import ScreenRoutes from "./routes/ScreenRoutes"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
	return (
		<BrowserRouter>
			<Header />
			<ScreenRoutes />
			<Footer />
		</BrowserRouter>
	)
}

export default App
