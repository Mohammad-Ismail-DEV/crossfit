// import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import editImg from "../../assets/images/edit.png"
import deleteImg from "../../assets/images/delete.png"
import "./Actions.css"
import axios from "axios"

const Actions = ({ id, address, handleData }) => {
	const navigate = useNavigate()
	const handleDelete = async () => {
		await axios.delete(`https://crossfit-api.000webhostapp.com/api/${address}/${id}`)
		handleData()
	}

	return (
		<div className="Actions">
			<div
				className="edit"
				onClick={() => navigate(`edit_${address}/${id}`)}>
				<img className="action-icon" src={editImg} alt="edit" />
			</div>
			<div className="delete" onClick={handleDelete}>
				<img className="action-icon" src={deleteImg} alt="delete" />
			</div>
		</div>
	)
}

export default Actions
