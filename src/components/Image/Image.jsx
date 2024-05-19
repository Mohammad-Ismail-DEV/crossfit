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
	const src2 = fromServer ? `https://crossfit-api.000webhostapp.com/media/${src}` : src
	const [stateSrc, setStateSrc] = useState()

	useEffect(() => {
		setStateSrc(src2)
	}, [src2])

	const handleError = () => {
		// setStateSrc(defaultSrc)
	}

	return (
		<div className={`Image ${className}`} onError={handleError} {...attr}>
			<img src={stateSrc || defaultSrc} alt={alt} />
		</div>
	)
}
export default Image
