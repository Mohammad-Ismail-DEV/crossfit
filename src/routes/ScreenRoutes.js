import React from "react"
import Home from "../pages/Home/Home"
import { Routes, Route } from "react-router-dom"

const ScreenRoutes = () => {
	return (
		<Routes>
			<Route path={"/"} element={<Home />} />
			{/* <Route path={'/products'} element={} /> */}
		</Routes>
	)
}

export default ScreenRoutes
