import Uppy from "@uppy/core"
import { Dashboard } from "@uppy/react"
import XHRUpload from "@uppy/xhr-upload"
import { useEffect, useState } from "react"
import Image from "../Image/Image"
import "./UppyUpload.css"

const uppy = new Uppy().use(XHRUpload, {
	endpoint: "http://localhost:8000/api/upload"
})

const UppyUpload = ({
	name,
	onComplete,
	defaultImages = [],
	restrictions = {},
	singleFile = true,
	...attr
}) => {
	const [images, setImages] = useState(defaultImages)
	if (singleFile) {
		restrictions.maxNumberOfFiles = 1
	}
	useEffect(() => {
		uppy.setOptions({ restrictions, autoProceed: true })
	}, [])

	useEffect(() => {
		const handleComplete = (r) => {
			const response = r.successful.map((v) => v.response.body)
			console.log("response", response[0].data)
			if (singleFile) {
				setImages([response[0].data.name])
			} else {
				setImages((state) => [
					...state,
					...response.map((v) => v.data.name)
				])
			}
			onComplete?.(response)
		}
		uppy.on("complete", handleComplete)
		return () => {
			uppy.off("complete", handleComplete)
		}
	}, [onComplete])

	const handleDeleteImage = (index) => {
		setImages(images?.filter((_, k) => k !== index))
	}

	return (
		<div className="UppyUpload">
			<div className="input-holder">
				<input
					className="input-holder"
					name={name}
					type="hidden"
					value={images?.join(",")}
				/>
				<Dashboard
					className="input-holder"
					uppy={uppy}
					waitForThumbnailsBeforeUpload
					{...attr}
				/>
			</div>
			<div className="images-holder">
				{defaultImages?.map((v, k) => (
					<div className="image-holder" key={k}>
						<div
							className="icon-delete fas fa-circle-xmark"
							onClick={() => handleDeleteImage(k)}></div>
						<Image fromServer src={v} />
					</div>
				))}
			</div>
		</div>
	)
}

export default UppyUpload
