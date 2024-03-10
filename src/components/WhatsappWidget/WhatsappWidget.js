import React from "react"

import WhatsAppWidget from "react-whatsapp-chat-widget"
import "react-whatsapp-chat-widget/index.css"

const WhatsappWidget = () => {
	return (
		<WhatsAppWidget
			phoneNo="96181610746"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={5000}
			messageBox={true}
			messageBoxTxt=""
			iconSize="40"
			iconColor="white"
			iconBgColor="tomato"
			headerIcon="https://www.pdapps.net.in/_next/static/media/android-chrome-192x192.9a39c2c7.png"
			headerIconColor="pink"
			headerTxtColor="black"
			headerBgColor="tomato"
			headerTitle="Cross Fit"
			headerCaption="Online"
			bodyBgColor="#bbb"
			chatPersonName="Support"
			chatMessage={
				<>
					Hi there 👋 <br />
					<br /> How can I help you?
				</>
			}
			footerBgColor="#999"
			placeholder="Type a message.."
			btnBgColor="yellow"
			btnTxt="Start Chat"
			btnTxtColor="black"
		/>
	)
}

export default WhatsappWidget
