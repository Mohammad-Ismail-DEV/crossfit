import Uppy from "@uppy/core"
import { Dashboard } from "@uppy/react"
import XHRUpload from "@uppy/xhr-upload"
import { useEffect, useState } from "react"
import Image from "../Image/Image"
import "./UppyUpload.css"

const uppy = new Uppy().use(XHRUpload, {
	endpoint: "https://crossfit-api.000webhostapp.com/api/upload",
	headers: {
		"Accept":"Application/JSON"
	}
})

const UppyUpload = ({
	name,
	onComplete,
	onSubmit = false,
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
			if (singleFile) {
				setImages([response[0].data.name])
			} else {
				setImages((state) => [
					...state,
					...response.map((v) => v.data.name)
				])
			}
			onComplete?.(response)
			uppy.removeFile()
		}
		uppy.on("complete", handleComplete)
		return () => {
			uppy.off("complete", handleComplete)
		}
	}, [onComplete])

	const handleDeleteImage = (index) => {
		setImages(images?.filter((_, k) => k !== index))
	}

	useEffect(() => {
		uppy.cancelAll()
	}, [onSubmit])

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
