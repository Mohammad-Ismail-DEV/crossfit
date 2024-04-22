import { useState } from "react"
import { useEffect } from "react"
import "./Image.css"

const Image = ({
	className = "",
	src,
	fromServer = false,
	alt = "",
	defaultSrc = "./images/default.png",
	...attr
}) => {
	console.log("src", src)
	console.log("fromServer", fromServer)
	const src2 = fromServer ? `http://localhost:8000/media/${src}` : src
	const [stateSrc, setStateSrc] = useState()

	useEffect(() => {
		setStateSrc(src2)
	}, [src2])

	const handleError = () => {
		// setStateSrc(defaultSrc)
	}
	console.log("stateSrc", stateSrc)

	return (
		<div className={`Image ${className}`} onError={handleError} {...attr}>
			<img src={stateSrc || defaultSrc} alt={alt} />
		</div>
	)
}
export default Image
