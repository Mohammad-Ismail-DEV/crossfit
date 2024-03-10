import axios from "axios"

// Get all and by id HTTP Requests
export const getMembers = async (params) => {
	var r = null
	console.log("params", params)
	if (params) {
		if (params.email && params.password) {
			if (params.email === "admin" && params.password === "admin") {
				r = [{ name: "admin", role: "admin" }]
				return r
			} else {
				r = await axios.get("http://localhost:8000/api/members/", {
					params
				})
				return r.data.data
			}
		} else if (params.id) {
			r = await axios.get(
				`http://localhost:8000/api/members/${params.id}`,
				{ params }
			)
			return r.data.data
		}
	} else {
		console.log("1", 1)
		r = await axios.get("http://localhost:8000/api/members")
		return r.data.data
	}
}
export const getProducts = async (id) => {
	var r = null
	if (id) {
		r = await axios.get(`http://localhost:8000/api/products/${id}`)
	} else {
		r = await axios.get("http://localhost:8000/api/products")
	}
	return r.data.data
}
export const getClasses = async (id) => {
	var r = null
	if (id) {
		r = await axios.get(`http://localhost:8000/api/gym_classes/${id}`)
	} else {
		r = await axios.get("http://localhost:8000/api/gym_classes")
	}
	return r.data.data
}
export const getInstructors = async (id) => {
	var r = null
	if (id) {
		r = await axios.get(`http://localhost:8000/api/instructors/${id}`)
	} else {
		r = await axios.get("http://localhost:8000/api/instructors")
	}
	return r.data.data
}
export const getSessions = async (id) => {
	var r = null
	if (id) {
		r = await axios.get(`http://localhost:8000/api/sessions/${id}`)
		return r.data.data
	} else {
		r = await axios.get("http://localhost:8000/api/sessions")
		return r.data
	}
}
export const getBookings = async (id) => {
	var r = null
	if (id) {
		r = await axios.get(`http://localhost:8000/api/bookings/${id}`)
	} else {
		r = await axios.get("http://localhost:8000/api/bookings")
	}
	return r.data.data
}
export const getUserBookings = async (member_id) => {
	var r = null
	if (member_id) {
		r = await axios.get(`http://localhost:8000/api/user_bookings`, {
			parms: { member_id }
		})
	} else {
		r = await axios.get("http://localhost:8000/api/user_bookings")
	}
	return r.data.data
}
export const getPersonalTrainers = async (id) => {
	var r = null
	if (id) {
		r = await axios.get(`http://localhost:8000/api/personal_trainers/${id}`)
	} else {
		r = await axios.get("http://localhost:8000/api/personal_trainers")
	}
	return r.data.data
}

// Post and Update HTTP Requests
export const postMember = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`http://localhost:8000/api/members/${params.id}`,
			params
		)
	} else {
		r = await axios.post("http://localhost:8000/api/members", params)
	}
	return r.data.data
}
export const postProduct = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`http://localhost:8000/api/products/${params.id}`,
			params
		)
	} else {
		r = await axios.post("http://localhost:8000/api/products", params)
	}
	return r.data.data
}
export const postClass = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`http://localhost:8000/api/gym_classes/${params.id}`,
			params
		)
	} else {
		r = await axios.post("http://localhost:8000/api/gym_classes", params)
	}
	return r.data.data
}
export const postInstructor = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`http://localhost:8000/api/instructors/${params.id}`,
			params
		)
	} else {
		r = await axios.post("http://localhost:8000/api/instructors", params)
	}
	return r.data.data
}
export const postSession = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`http://localhost:8000/api/sessions/${params.id}`,
			params
		)
	} else {
		r = await axios.post("http://localhost:8000/api/sessions", params)
	}
	return r.data.data
}
export const postBoooking = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`http://localhost:8000/api/bookings/${params.id}`,
			params
		)
	} else {
		r = await axios.post("http://localhost:8000/api/bookings", params)
	}
	return r.data.data
}
export const postPersonalTrainer = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`http://localhost:8000/api/personal_trainers/${params.id}`,
			params
		)
	} else {
		r = await axios.post(
			"http://localhost:8000/api/personal_trainers",
			params
		)
	}
	return r.data.data
}
export const postMemberClass = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`http://localhost:8000/api/member_classes/${params.id}`,
			params
		)
	} else {
		r = await axios.post("http://localhost:8000/api/member_classes", params)
	}
	return r.data.data
}
