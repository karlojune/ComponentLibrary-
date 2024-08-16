import React from "react"
import { BannerContext } from "./Banner"

export default function BannerDescription({ children }) {
	const { textColor } = React.useContext(BannerContext)
	const styles = { color: textColor }
	return (
		<p className="banner-description" style={styles}>
			{children}
		</p>
	)
}
