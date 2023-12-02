import axios from "axios"

export const test = async () => {
	const r = await axios.get("http://localhost:3100/shops")
	console.log("r.data", r.data)
}

export const handleLogin = async (params) => {
	// const r = await axios.post("/", { params })
	console.log("params", params)
}
