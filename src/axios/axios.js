import axios from "axios"

// Get all and by id HTTP Requests
export const getMembers = async (params) => {
	var r = null
	if (params) {
		if (params.email && params.password) {
			if (params.email === "admin" && params.password === "admin") {
				r = [{ name: "admin", role: "admin" }]
				return r
			} else {
				r = await axios.get("https://crossfit-api.000webhostapp.com/api/members/", {
					params
				})
				return r.data.data
			}
		} else if (params.id) {
			r = await axios.get(
				`https://crossfit-api.000webhostapp.com/api/members/${params.id}`,
				{ params }
			)
			return r.data.data
		}
	} else {
		r = await axios.get("https://crossfit-api.000webhostapp.com/api/members")
		return r.data.data
	}
}
export const getProducts = async (id) => {
	var r = null
	if (id) {
		r = await axios.get(`https://crossfit-api.000webhostapp.com/api/products/${id}`)
	} else {
		r = await axios.get("https://crossfit-api.000webhostapp.com/api/products")
	}
	return r.data.data
}
export const getClasses = async (id) => {
	var r = null
	if (id) {
		r = await axios.get(`https://crossfit-api.000webhostapp.com/api/gym_classes/${id}`)
	} else {
		r = await axios.get("https://crossfit-api.000webhostapp.com/api/gym_classes")
	}	
	return r.data.data
}
export const getInstructors = async (id) => {
	var r = null
	if (id) {
		r = await axios.get(`https://crossfit-api.000webhostapp.com/api/instructors/${id}`)
	} else {
		r = await axios.get("https://crossfit-api.000webhostapp.com/api/instructors")
	}
	return r.data.data
}
export const getSessions = async (id) => {
	var r = null
	if (id) {
		r = await axios.get(`https://crossfit-api.000webhostapp.com/api/sessions/${id}`)
		return r.data.data
	} else {
		r = await axios.get("https://crossfit-api.000webhostapp.com/api/sessions")
		return r.data
	}
}
export const getSChedule = async (id) => {
	var r = null
	if (id) {
		r = await axios.get(`https://crossfit-api.000webhostapp.com/api/schedule/${id}`)
		return r.data.data
	} else {
		r = await axios.get("https://crossfit-api.000webhostapp.com/api/schedule")
		return r.data
	}
}
export const getBookings = async (id) => {
	var r = null
	if (id) {
		r = await axios.get(`https://crossfit-api.000webhostapp.com/api/bookings/${id}`)
	} else {
		r = await axios.get("https://crossfit-api.000webhostapp.com/api/bookings")
	}
	return r.data.data
}
export const getUserBookings = async (member_id) => {
	var r = null
	if (member_id) {
		r = await axios.get(`https://crossfit-api.000webhostapp.com/api/user_bookings`, {
			parms: { member_id }
		})
	} else {
		r = await axios.get("https://crossfit-api.000webhostapp.com/api/user_bookings")
	}
	return r.data.data
}
export const getPersonalTrainers = async (id) => {
	var r = null
	if (id) {
		r = await axios.get(`https://crossfit-api.000webhostapp.com/api/personal_trainers/${id}`)
	} else {
		r = await axios.get("https://crossfit-api.000webhostapp.com/api/personal_trainers")
	}
	return r.data.data
}

// Post and Update HTTP Requests btb3at 3l database
export const postMember = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`https://crossfit-api.000webhostapp.com/api/members/${params.id}`,
			params
		)
	} else {
		r = await axios.post("https://crossfit-api.000webhostapp.com/api/members", params)
	}
	return r.data.data
}
export const postProduct = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`https://crossfit-api.000webhostapp.com/api/products/${params.id}`,
			params
		)
	} else {
		r = await axios.post("https://crossfit-api.000webhostapp.com/api/products", params)
	}
	return r.data.data
}
export const postClass = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`https://crossfit-api.000webhostapp.com/api/gym_classes/${params.id}`,
			params
		)
	} else {
		r = await axios.post("https://crossfit-api.000webhostapp.com/api/gym_classes", params)
	}
	return r.data.data
}
export const postInstructor = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`https://crossfit-api.000webhostapp.com/api/instructors/${params.id}`,
			params
		)
	} else {
		r = await axios.post("https://crossfit-api.000webhostapp.com/api/instructors", params)
	}
	return r.data.data
}
export const postSession = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`https://crossfit-api.000webhostapp.com/api/sessions/${params.id}`,
			params
		)
	} else {
		r = await axios.post("https://crossfit-api.000webhostapp.com/api/sessions", params)
	}
	return r.data.data
}
export const postBoooking = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`https://crossfit-api.000webhostapp.com/api/bookings/${params.id}`,
			params
		)
	} else {
		r = await axios.post("https://crossfit-api.000webhostapp.com/api/bookings", params)
	}
	return r.data.data
}
export const postPersonalTrainer = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`https://crossfit-api.000webhostapp.com/api/personal_trainers/${params.id}`,
			params
		)
	} else {
		r = await axios.post(
			"https://crossfit-api.000webhostapp.com/api/personal_trainers",
			params
		)
	}
	return r.data.data
}
export const postMemberClass = async (params) => {
	var r = null
	if (params.id) {
		r = await axios.put(
			`https://crossfit-api.000webhostapp.com/api/member_classes/${params.id}`,
			params
		)
	} else {
		r = await axios.post("https://crossfit-api.000webhostapp.com/api/member_classes", params)
	}
	return r.data.data
}
