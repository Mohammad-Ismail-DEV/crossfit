import axios from "axios"
const baseUrl = "https://d3d6-94-187-21-76.ngrok-free.app/api/products"

export const test = async () => {
	const r = await axios.get("http://localhost:3100/shops")
	console.log("r.data", r.data)
}

export const handleLogin = async (params) => {
	// const r = await axios.post("/", { params })
	console.log("params", params)
}
export const getProducts = async () => {
	const r = await axios.get(baseUrl, {
		headers: new Headers({
			"ngrok-skip-browser-warning": "6024"
		})
	})
	console.log(r.data)
}
