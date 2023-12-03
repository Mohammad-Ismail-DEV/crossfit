import React from "react"
import Home from "../pages/Home/Home"
import { Routes, Route } from "react-router-dom"
import Classes from "../pages/Classes/Classes"
import AboutUs from "../pages/AboutUs/AboutUs"
import Products from "../pages/Products/Products"
import ContactUs from "../pages/ContactUs/ContactUs"

const ScreenRoutes = () => {
	return (
		<Routes>
			<Route path={"/"} element={<Home />} />
			<Route path={"/about-us"} element={<AboutUs />} />
			<Route path={"/classes"} element={<Classes />} />
			<Route path={"/products"} element={<Products />} />
			<Route path={"/contact-us"} element={<ContactUs />} />
		</Routes>
	)
}

export default ScreenRoutes
