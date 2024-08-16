import React from "react"
import { FaCheckCircle } from "react-icons/fa"
import data from "./data"

const BannerContext = React.createContext()

export default function Banner({ children, status = "success" }) {
	const { icon, iconColor, backgroundColor } = data[status]
	const bannerStyles = { backgroundColor }
	const iconStyles = { color: iconColor }

	return (
		<BannerContext.Provider value={data[status]}>
			<div className="banner" style={bannerStyles}>
				<div className="banner-icon" style={iconStyles}>
					{icon}
				</div>
				{children}
			</div>
		</BannerContext.Provider>
	)
}

export { BannerContext }
